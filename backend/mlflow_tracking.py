"""MLflow experiment tracking + model registry. No-ops cleanly if MLflow is absent."""
from __future__ import annotations

from typing import Any

EXPERIMENT = "electricity-demand-forecast"
REGISTERED_NAME = "electricity-demand-forecaster"


def log_comparison(payload: dict[str, Any], best_est: Any) -> int | None:
    """Log every model as a run, then register the best one. Returns model version."""
    try:
        import mlflow
        import mlflow.sklearn
    except Exception:
        return None

    try:
        mlflow.set_experiment(EXPERIMENT)
        best_name = payload["best"]["name"]
        for r in payload["results"]:
            if "val" not in r:
                continue
            with mlflow.start_run(run_name=f"{payload['runId']}-{r['name']}"):
                mlflow.log_params({k: v for k, v in r.get("params", {}).items()})
                mlflow.set_tags({"algorithm": r["name"], "family": r["family"],
                                 "is_best": str(r["name"] == best_name)})
                mlflow.log_metrics({f"val_{k}": v for k, v in r["val"].items() if v is not None})
                mlflow.log_metrics({f"test_{k}": v for k, v in r["test"].items() if v is not None})
                mlflow.log_metric("train_seconds", r["trainSeconds"])

        with mlflow.start_run(run_name=f"{payload['runId']}-BEST-{best_name}"):
            mlflow.set_tags({"selection_metric": "validation_rmse", "algorithm": best_name})
            mlflow.log_metrics({f"val_{k}": v for k, v in payload["best"]["val"].items() if v is not None})
            mlflow.log_metrics({f"test_{k}": v for k, v in payload["best"]["test"].items() if v is not None})
            info = mlflow.sklearn.log_model(best_est, "model", registered_model_name=REGISTERED_NAME)
        try:
            from mlflow.tracking import MlflowClient
            versions = MlflowClient().search_model_versions(f"name='{REGISTERED_NAME}'")
            return max(int(v.version) for v in versions) if versions else None
        except Exception:
            return None
    except Exception:
        return None