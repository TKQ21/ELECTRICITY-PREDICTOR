import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Papa from "papaparse";
import {
  Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { AlertTriangle, Boxes, Download, FlaskConical, Package, Play, Upload } from "lucide-react";
import { detectSchema, PipelineResult, runPipeline, SchemaReport, Row } from "@/ml/pipeline";
import { fmt } from "@/ml/metrics";
import {
  DOCKERFILE, FASTAPI_MAIN, loadRuns, logRun, MLFLOW_TRAIN, modelArtifact, README_MLOPS,
  registerBest, REQUIREMENTS, TrackedRun, download,
} from "@/ml/registry";

const MLLab = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [schema, setSchema] = useState<SchemaReport | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState<PipelineResult | null>(null);
  const [runs, setRuns] = useState<TrackedRun[]>(loadRuns());
  const [version, setVersion] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name); setResult(null); setError(""); setVersion(null);
    Papa.parse(file, {
      header: true, skipEmptyLines: true,
      complete: (r) => {
        const { schema: s, rows: parsed } = detectSchema(r.data as Record<string, string>[]);
        setSchema(s); setRows(parsed);
      },
      error: () => setError("Could not read the CSV file."),
    });
  };

  const train = () => {
    if (!schema || !rows.length) return;
    setBusy(true); setError("");
    setTimeout(() => {
      try {
        const res = runPipeline(rows, schema, 30);
        setResult(res);
        logRun(res);
        setRuns(loadRuns());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Training failed.");
      } finally { setBusy(false); }
    }, 30);
  };

  const doRegister = () => {
    if (!result) return;
    const v = registerBest(result);
    setVersion(v); setRuns(loadRuns());
  };

  const cmp = result?.results.slice().sort((a, b) => a.val.rmse - b.val.rmse) ?? [];
  const avp = result
    ? result.testDates.map((d, i) => ({
        date: d, actual: result.testActual[i], predicted: result.best.testPred[i],
      }))
    : [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative z-10"
    >
      <div className="neon-card space-y-6">
        <div className="flex items-center gap-3">
          <FlaskConical className="text-neon-pink w-7 h-7" />
          <h2 className="text-2xl font-display text-foreground">ML Lab — Model Training & Comparison</h2>
        </div>

        <div className="rounded-lg border border-neon-yellow/40 bg-neon-yellow/5 p-4 text-sm font-body text-muted-foreground flex gap-3">
          <AlertTriangle className="w-5 h-5 text-neon-yellow shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p><span className="text-neon-yellow">Data honesty notice.</span> The country / state / sector / energy-source figures elsewhere on this page are <strong>static reference estimates stored in the app</strong> — they are not fetched live from Google or any real-time API, and no model is trained on them.</p>
            <p>Every metric below is computed <strong>only</strong> on the historical CSV you upload here. Nothing is simulated. If you upload nothing, no accuracy is claimed.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input ref={fileRef} type="file" accept=".csv" onChange={onUpload} className="hidden" />
          <button onClick={() => fileRef.current?.click()} className="neon-button flex items-center gap-2">
            <Upload className="w-5 h-5" /> {fileName || "Upload historical CSV"}
          </button>
          <button
            onClick={train}
            disabled={!rows.length || busy}
            className="neon-button neon-button-green flex items-center gap-2 disabled:opacity-40"
          >
            <Play className="w-5 h-5" /> {busy ? "Training models…" : "Run model comparison"}
          </button>
        </div>

        {error && <p className="text-neon-orange font-body text-sm">{error}</p>}

        {schema && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg border border-neon-cyan/30 p-4 text-sm font-body space-y-1">
              <h3 className="font-display text-neon-skyblue mb-2">Schema detection</h3>
              <p>Date column: <span className="text-neon-cyan">{schema.dateColumn ?? "not found"}</span></p>
              <p>Target column: <span className="text-neon-cyan">{schema.targetColumn ?? "not found"}</span></p>
              <p>Other numeric candidates: {schema.candidateTargets.filter(c => c !== schema.targetColumn).join(", ") || "—"}</p>
              <p>Observation interval (median): {Number.isNaN(schema.medianGapDays) ? "n/a" : `${schema.medianGapDays} day(s)`}</p>
            </div>
            <div className="bg-card rounded-lg border border-neon-green/30 p-4 text-sm font-body space-y-1">
              <h3 className="font-display text-neon-green mb-2">Cleaning report</h3>
              <p>Rows in file: {schema.totalRows} → usable: <span className="text-neon-green">{schema.usableRows}</span></p>
              <p>Dropped (missing): {schema.droppedMissing} · dropped (non-numeric/bad date): {schema.droppedNonNumeric}</p>
              <p>Duplicate timestamps merged: {schema.duplicateDates} · outliers winsorised (MAD·8): {schema.droppedOutliers}</p>
            </div>
            {[...schema.errors.map(e => ({ t: "error", m: e })), ...schema.warnings.map(w => ({ t: "warn", m: w }))].map((n, i) => (
              <p key={i} className={`sm:col-span-2 text-sm font-body ${n.t === "error" ? "text-neon-orange" : "text-neon-yellow"}`}>
                {n.t === "error" ? "✕" : "!"} {n.m}
              </p>
            ))}
          </div>
        )}

        {result && (
          <div className="space-y-8">
            <div className="text-sm font-body text-muted-foreground">
              Chronological split (no shuffling): train {result.splits.train} · validation {result.splits.val} · test {result.splits.test} observations.
              Selection metric: <span className="text-neon-cyan">lowest validation RMSE</span>, tie-broken on MAE.
            </div>

            <div className="overflow-x-auto">
              <h3 className="text-lg font-display text-neon-skyblue mb-3">Algorithm comparison (held-out test metrics)</h3>
              <table className="w-full text-sm font-body border-collapse min-w-[720px]">
                <thead>
                  <tr className="text-left text-muted-foreground border-b border-border">
                    {["Algorithm", "Val RMSE", "MAE", "MSE", "RMSE", "R²", "MAPE %", "Train s"].map(h => (
                      <th key={h} className="py-2 pr-4 font-display">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cmp.map((r) => (
                    <tr key={r.name} className={`border-b border-border/50 ${r.name === result.best.name ? "bg-neon-green/5" : ""}`}>
                      <td className={`py-2 pr-4 ${r.name === result.best.name ? "text-neon-green" : "text-foreground"}`}>
                        {r.name}{r.name === result.best.name && " ★ best"}
                      </td>
                      <td className="py-2 pr-4">{fmt(r.val.rmse, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test.mae, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test.mse, 1)}</td>
                      <td className="py-2 pr-4">{fmt(r.test.rmse, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test.r2, 3)}</td>
                      <td className="py-2 pr-4">{fmt(r.test.mape, 2)}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{r.trainSeconds.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="text-muted-foreground">
                    <td className="py-2 pr-4 italic">Naive persistence baseline (lag-1)</td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2 pr-4">{fmt(result.baseline.mae, 2)}</td>
                    <td className="py-2 pr-4">{fmt(result.baseline.mse, 1)}</td>
                    <td className="py-2 pr-4">{fmt(result.baseline.rmse, 2)}</td>
                    <td className="py-2 pr-4">{fmt(result.baseline.r2, 3)}</td>
                    <td className="py-2 pr-4">{fmt(result.baseline.mape, 2)}</td>
                    <td className="py-2 pr-4">—</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-2">
                MAPE is shown only when no actual value equals zero. A model that cannot beat the naive baseline should not be deployed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-display text-neon-skyblue mb-3">
                Actual vs predicted — {result.best.name} (test window, never seen in training)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={avp}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 40%, 20%)" />
                  <XAxis dataKey="date" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "hsl(230, 40%, 12%)", border: "1px solid hsl(185,100%,50%)", borderRadius: 10 }} />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="hsl(185, 100%, 50%)" dot={false} strokeWidth={2} name="Actual" />
                  <Line type="monotone" dataKey="predicted" stroke="hsl(150, 100%, 45%)" dot={false} strokeWidth={2} strokeDasharray="5 5" name="Predicted" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {result.best.importance.some((i) => i.value > 0) && (
              <div>
                <h3 className="text-lg font-display text-neon-skyblue mb-3">Feature importance / explainability</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={result.best.importance.slice(0, 10)} layout="vertical" margin={{ left: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 40%, 20%)" />
                    <XAxis type="number" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                    <YAxis type="category" dataKey="feature" width={110} tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                    <Tooltip contentStyle={{ background: "hsl(230, 40%, 12%)", border: "1px solid hsl(310,100%,60%)", borderRadius: 10 }} />
                    <Bar dataKey="value" fill="hsl(310, 100%, 60%)" name="relative importance" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-muted-foreground">
                  Tree models: normalised split-gain importance. Linear models: |standardised coefficient|. kNN has no native importance.
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-display text-neon-skyblue mb-3">30-step forecast from the selected model</h3>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={result.forecast}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 40%, 20%)" />
                  <XAxis dataKey="date" tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fill: "hsl(185, 40%, 55%)", fontSize: 11 }} />
                  <Tooltip contentStyle={{ background: "hsl(230, 40%, 12%)", border: "1px solid hsl(150,100%,45%)", borderRadius: 10 }} />
                  <Line type="monotone" dataKey="predicted" stroke="hsl(150, 100%, 45%)" dot={false} strokeWidth={2} name="Forecast" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs text-muted-foreground">
                Recursive multi-step forecast — uncertainty compounds with horizon; these are model projections, not observations.
              </p>
            </div>

            {/* MLflow-style tracking */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Boxes className="w-5 h-5 text-neon-orange" />
                <h3 className="text-lg font-display text-neon-orange">Experiment tracking & model registry</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={doRegister} className="neon-button flex items-center gap-2">
                  <Package className="w-4 h-4" /> Register best model
                </button>
                <button onClick={() => download("model.json", modelArtifact(result, version ?? undefined), "application/json")} className="neon-button flex items-center gap-2">
                  <Download className="w-4 h-4" /> model.json (model + preprocessing)
                </button>
                <button onClick={() => download("train_mlflow.py", MLFLOW_TRAIN)} className="neon-button flex items-center gap-2">
                  <Download className="w-4 h-4" /> train_mlflow.py
                </button>
                <button onClick={() => download("main.py", FASTAPI_MAIN)} className="neon-button flex items-center gap-2">
                  <Download className="w-4 h-4" /> FastAPI main.py
                </button>
                <button onClick={() => { download("Dockerfile", DOCKERFILE); download("requirements.txt", REQUIREMENTS); download("README_MLOPS.md", README_MLOPS); }} className="neon-button flex items-center gap-2">
                  <Download className="w-4 h-4" /> Dockerfile + requirements + README
                </button>
              </div>
              {version && (
                <p className="text-sm font-body text-neon-green">
                  Registered “{result.best.name}” as electricity-demand-forecaster version {version} (local registry).
                </p>
              )}
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-body border-collapse min-w-[720px]">
                  <thead>
                    <tr className="text-left text-muted-foreground border-b border-border">
                      {["Run ID", "Finished", "Rows", "Best model", "Val RMSE", "Test RMSE", "Test R²", "Version"].map(h => (
                        <th key={h} className="py-2 pr-4 font-display">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {runs.map((r) => (
                      <tr key={r.runId} className="border-b border-border/50">
                        <td className="py-2 pr-4 text-neon-cyan">{r.runId}</td>
                        <td className="py-2 pr-4">{new Date(r.finishedAt).toLocaleString()}</td>
                        <td className="py-2 pr-4">{r.dataset.rows}</td>
                        <td className="py-2 pr-4">{r.bestModel}</td>
                        <td className="py-2 pr-4">{fmt(r.metrics.val_rmse, 2)}</td>
                        <td className="py-2 pr-4">{fmt(r.metrics.test_rmse, 2)}</td>
                        <td className="py-2 pr-4">{fmt(r.metrics.test_r2, 3)}</td>
                        <td className="py-2 pr-4 text-neon-green">{r.registeredVersion ? `v${r.registeredVersion}` : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground">
                Runs are tracked locally in this browser. The exported train_mlflow.py reproduces the same comparison in Python with
                scikit-learn / XGBoost / LightGBM / CatBoost and logs parameters, metrics, experiments and model versions to a real MLflow server,
                then serves the registered model through FastAPI in Docker.
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default MLLab;