import { PipelineResult } from "./pipeline";

/** Lightweight MLflow-style tracking store (browser localStorage). */
export interface TrackedRun {
  runId: string;
  experiment: string;
  finishedAt: string;
  dataset: { rows: number; target: string; dateColumn: string };
  bestModel: string;
  params: Record<string, number | string>;
  metrics: { val_rmse: number; val_mae: number; val_r2: number; test_rmse: number; test_mae: number; test_r2: number; test_mape: number | null };
  registeredVersion?: number;
}

const RUNS_KEY = "electripredict.mlflow.runs";
const REG_KEY = "electripredict.mlflow.registry";

export const loadRuns = (): TrackedRun[] => {
  try { return JSON.parse(localStorage.getItem(RUNS_KEY) || "[]"); } catch { return []; }
};

export function logRun(res: PipelineResult, experiment = "electricity-demand-forecast"): TrackedRun {
  const run: TrackedRun = {
    runId: res.runId,
    experiment,
    finishedAt: res.finishedAt,
    dataset: {
      rows: res.schema.usableRows,
      target: res.schema.targetColumn || "?",
      dateColumn: res.schema.dateColumn || "?",
    },
    bestModel: res.best.name,
    params: res.best.params,
    metrics: {
      val_rmse: res.best.val.rmse, val_mae: res.best.val.mae, val_r2: res.best.val.r2,
      test_rmse: res.best.test.rmse, test_mae: res.best.test.mae, test_r2: res.best.test.r2,
      test_mape: res.best.test.mape,
    },
  };
  const runs = [run, ...loadRuns()].slice(0, 25);
  localStorage.setItem(RUNS_KEY, JSON.stringify(runs));
  return run;
}

export function registerBest(res: PipelineResult): number {
  const versions: number[] = JSON.parse(localStorage.getItem(REG_KEY) || "[]");
  const version = (versions[0] ?? 0) + 1;
  localStorage.setItem(REG_KEY, JSON.stringify([version, ...versions].slice(0, 50)));
  const runs = loadRuns().map((r) => (r.runId === res.runId ? { ...r, registeredVersion: version } : r));
  localStorage.setItem(RUNS_KEY, JSON.stringify(runs));
  return version;
}

/* --------------------------- artifact export --------------------------- */

export function download(filename: string, content: string, mime = "text/plain") {
  const blob = new Blob([content], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

/** Serialized model + preprocessing pipeline — the artifact a FastAPI service loads. */
export function modelArtifact(res: PipelineResult, version?: number) {
  return JSON.stringify({
    schema_version: 1,
    run_id: res.runId,
    registered_version: version ?? null,
    created_at: res.finishedAt,
    dataset: {
      date_column: res.schema.dateColumn,
      target_column: res.schema.targetColumn,
      usable_rows: res.schema.usableRows,
      median_gap_days: res.schema.medianGapDays,
    },
    preprocessing: {
      steps: ["drop_missing", "coerce_numeric", "sort_by_date", "merge_duplicate_timestamps", "winsorize_mad_8", "lag_and_calendar_features"],
      features: res.best.importance.map((i) => i.feature),
    },
    model: { name: res.best.name, family: res.best.family, params: res.best.params, weights: (res as any).bestModel?.serialize?.() ?? null },
    metrics: { validation: res.best.val, test: res.best.test, naive_baseline_test: res.baseline },
    split: res.splits,
  }, null, 2);
}

export const FASTAPI_MAIN = `"""FastAPI serving layer for the exported ElectriPredict model artifact."""
import json, joblib
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="ElectriPredict Forecast API", version="1.0.0")

# model.pkl is produced by train_mlflow.py; model.json holds the pipeline metadata
MODEL = joblib.load("artifacts/model.pkl")
META = json.load(open("artifacts/model.json"))
FEATURES = META["preprocessing"]["features"]

class PredictRequest(BaseModel):
    features: dict  # {feature_name: value}

@app.get("/health")
def health():
    return {"status": "ok", "model": META["model"]["name"], "version": META.get("registered_version")}

@app.get("/metrics")
def metrics():
    return META["metrics"]

@app.post("/predict")
def predict(req: PredictRequest):
    missing = [f for f in FEATURES if f not in req.features]
    if missing:
        raise HTTPException(422, f"missing features: {missing}")
    x = [[req.features[f] for f in FEATURES]]
    return {"predicted_kwh": float(MODEL.predict(x)[0]), "model": META["model"]["name"]}
`;

export const MLFLOW_TRAIN = `"""Reference Python training job: same pipeline, real libraries, MLflow tracking.

Run:  python train_mlflow.py data.csv
Then: mlflow ui  (http://localhost:5000)
"""
import sys, json, joblib, numpy as np, pandas as pd, mlflow, mlflow.sklearn
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from xgboost import XGBRegressor
from lightgbm import LGBMRegressor
from catboost import CatBoostRegressor

DATE_COL, TARGET = "Date", "Consumption_kWh"

def featurize(df):
    df = df.sort_values(DATE_COL).reset_index(drop=True)
    for lag in (1, 2, 3, 7, 14):
        df[f"lag_{lag}"] = df[TARGET].shift(lag)
    df["roll_mean_7"] = df[TARGET].shift(1).rolling(7).mean()
    df["roll_std_7"] = df[TARGET].shift(1).rolling(7).std()
    df["roll_mean_14"] = df[TARGET].shift(1).rolling(14).mean()
    df["diff_1"] = df["lag_1"] - df["lag_2"]
    dow = df[DATE_COL].dt.dayofweek
    df["dow_sin"], df["dow_cos"] = np.sin(2*np.pi*dow/7), np.cos(2*np.pi*dow/7)
    df["is_weekend"] = (dow >= 5).astype(int)
    m = df[DATE_COL].dt.month
    df["month_sin"], df["month_cos"] = np.sin(2*np.pi*m/12), np.cos(2*np.pi*m/12)
    df["day_of_year"] = df[DATE_COL].dt.dayofyear
    df["trend"] = np.arange(len(df))
    return df.dropna().reset_index(drop=True)

def scores(y, p):
    mse = mean_squared_error(y, p)
    mape = float(np.mean(np.abs((y - p) / y)) * 100) if (y != 0).all() else None
    return {"mae": mean_absolute_error(y, p), "mse": mse, "rmse": mse ** 0.5,
            "r2": r2_score(y, p), "mape": mape}

df = featurize(pd.read_csv(sys.argv[1], parse_dates=[DATE_COL]))
feats = [c for c in df.columns if c not in (DATE_COL, TARGET)]
X, y = df[feats].values, df[TARGET].values
n = len(df); n_test = max(5, int(n * .15)); n_val = max(5, int(n * .15)); n_tr = n - n_val - n_test
splits = dict(train=slice(0, n_tr), val=slice(n_tr, n_tr + n_val), test=slice(n_tr + n_val, n))

models = {
    "LinearRegression": LinearRegression(),
    "Ridge": Ridge(alpha=1.0),
    "RandomForest": RandomForestRegressor(n_estimators=400, random_state=42),
    "XGBoost": XGBRegressor(n_estimators=600, learning_rate=.05, max_depth=4, subsample=.9, random_state=42),
    "LightGBM": LGBMRegressor(n_estimators=600, learning_rate=.05, num_leaves=31, random_state=42),
    "CatBoost": CatBoostRegressor(iterations=600, learning_rate=.05, depth=6, verbose=0, random_seed=42),
}

mlflow.set_experiment("electricity-demand-forecast")
rows, fitted = [], {}
for name, model in models.items():
    with mlflow.start_run(run_name=name):
        model.fit(X[splits["train"]], y[splits["train"]])
        val, test = scores(y[splits["val"]], model.predict(X[splits["val"]])), scores(y[splits["test"]], model.predict(X[splits["test"]]))
        mlflow.log_params(model.get_params())
        mlflow.log_metrics({f"val_{k}": v for k, v in val.items() if v is not None})
        mlflow.log_metrics({f"test_{k}": v for k, v in test.items() if v is not None})
        mlflow.sklearn.log_model(model, "model")
        rows.append({"model": name, **{f"val_{k}": v for k, v in val.items()}, **{f"test_{k}": v for k, v in test.items()}})
        fitted[name] = model

table = pd.DataFrame(rows).sort_values("val_rmse")
print(table.to_string(index=False))
best = table.iloc[0]["model"]
print("Selected best model (lowest validation RMSE):", best)

with mlflow.start_run(run_name=f"best-{best}"):
    info = mlflow.sklearn.log_model(fitted[best], "model", registered_model_name="electricity-demand-forecaster")
    mlflow.log_metric("val_rmse", float(table.iloc[0]["val_rmse"]))
joblib.dump(fitted[best], "artifacts/model.pkl")
json.dump({"preprocessing": {"features": feats}, "model": {"name": best}}, open("artifacts/model.json", "w"), indent=2)
`;

export const DOCKERFILE = `FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
`;

export const REQUIREMENTS = `fastapi==0.115.0
uvicorn[standard]==0.30.6
pydantic==2.9.2
scikit-learn==1.5.2
xgboost==2.1.1
lightgbm==4.5.0
catboost==1.2.7
mlflow==2.16.2
pandas==2.2.3
numpy==2.1.1
joblib==1.4.2
`;

export const README_MLOPS = `# ElectriPredict MLOps pack

Dataset -> 8 algorithms -> metric comparison -> best model -> MLflow -> FastAPI -> Docker

1. \`python train_mlflow.py data.csv\` — trains LinearRegression, Ridge, RandomForest,
   XGBoost, LightGBM and CatBoost, logs params/metrics/models to MLflow and registers
   the best run (lowest validation RMSE) as \`electricity-demand-forecaster\`.
2. \`mlflow ui\` — inspect experiments, runs, metrics and model versions.
3. \`uvicorn main:app --reload\` — serve /predict, /metrics, /health from artifacts/.
4. \`docker build -t electripredict-api . && docker run -p 8000:8000 electripredict-api\`

The browser app runs the same pipeline in TypeScript so you can compare models without
a backend; model.json exported from the UI documents the exact preprocessing steps,
features, split sizes and measured metrics of that in-browser run.
`;