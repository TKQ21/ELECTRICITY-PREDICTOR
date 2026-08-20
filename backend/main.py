"""FastAPI serving layer: CSV upload -> background training job -> polling -> results.

Run:  uvicorn main:app --reload --port 8000
"""
from __future__ import annotations

import io
import json
import math
import threading
import time
import uuid
from pathlib import Path
from typing import Any

import pandas as pd
from fastapi import BackgroundTasks, FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from preprocessing import detect_schema
from train_ml import ARTIFACTS, run_pipeline

app = FastAPI(title="ElectriPredict ML API", version="2.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAX_UPLOAD_BYTES = 200 * 1024 * 1024
JOBS: dict[str, dict[str, Any]] = {}
JOBS_LOCK = threading.Lock()
RUNS_FILE = ARTIFACTS / "runs.json"


def _set(job_id: str, **kw: Any) -> None:
    with JOBS_LOCK:
        JOBS.setdefault(job_id, {}).update(kw)


def _load_runs() -> list[dict[str, Any]]:
    try:
        return json.loads(RUNS_FILE.read_text())
    except Exception:
        return []


def _append_run(payload: dict[str, Any]) -> None:
    run = {
        "runId": payload["runId"],
        "experiment": "electricity-demand-forecast",
        "finishedAt": payload["finishedAt"],
        "dataset": {
            "rows": payload["schema"]["usableRows"],
            "target": payload["schema"]["targetColumn"],
            "dateColumn": payload["schema"]["dateColumn"],
        },
        "bestModel": payload["best"]["name"],
        "metrics": {
            "val_rmse": payload["best"]["val"]["rmse"],
            "val_mae": payload["best"]["val"]["mae"],
            "val_r2": payload["best"]["val"]["r2"],
            "test_rmse": payload["best"]["test"]["rmse"],
            "test_mae": payload["best"]["test"]["mae"],
            "test_r2": payload["best"]["test"]["r2"],
            "test_mape": payload["best"]["test"]["mape"],
        },
        "registeredVersion": payload.get("registeredVersion"),
    }
    runs = [run] + [r for r in _load_runs() if r.get("runId") != run["runId"]]
    RUNS_FILE.write_text(json.dumps(runs[:50], indent=2, default=str))


def _sanitize(o: Any) -> Any:
    if isinstance(o, float):
        return None if (math.isnan(o) or math.isinf(o)) else o
    if isinstance(o, dict):
        return {k: _sanitize(v) for k, v in o.items()}
    if isinstance(o, list):
        return [_sanitize(v) for v in o]
    return o


def _train_job(job_id: str, content: bytes, horizon: int) -> None:
    try:
        _set(job_id, status="running", progress=5, message="Parsing CSV")
        df = pd.read_csv(io.BytesIO(content), low_memory=False)
        del content
        rep = detect_schema(df)
        if rep.errors:
            raise ValueError("; ".join(rep.errors))
        _set(job_id, schema=rep.dict())

        def progress(p: int, m: str) -> None:
            _set(job_id, progress=p, message=m)

        payload = run_pipeline(df, rep, horizon=horizon, run_id=job_id, progress=progress)
        _append_run(payload)
        _set(job_id, status="succeeded", progress=100, message="Done",
             result=_sanitize(payload), schema=payload["schema"])
    except Exception as exc:
        _set(job_id, status="failed", progress=100, message="Training failed", error=str(exc))


@app.get("/api/ml/health")
def health() -> dict[str, Any]:
    meta_path = ARTIFACTS / "model.json"
    meta = json.loads(meta_path.read_text()) if meta_path.exists() else None
    return {
        "status": "ok",
        "service": "ElectriPredict ML API",
        "registered_model": (meta or {}).get("model", {}).get("name"),
        "registered_version": (meta or {}).get("registered_version"),
    }


@app.post("/api/ml/train")
async def train(background: BackgroundTasks, file: UploadFile = File(...), horizon: int = 30) -> dict[str, str]:
    if not file.filename or not file.filename.lower().endswith(".csv"):
        raise HTTPException(400, "Please upload a .csv file.")
    content = await file.read()
    if len(content) > MAX_UPLOAD_BYTES:
        raise HTTPException(413, "CSV is larger than 200 MB.")
    if not content:
        raise HTTPException(400, "Uploaded file is empty.")
    job_id = f"run-{uuid.uuid4().hex[:10]}"
    _set(job_id, status="queued", progress=0, message="Queued",
         fileName=file.filename, createdAt=time.time())
    background.add_task(_train_job, job_id, content, max(1, min(365, horizon)))
    return {"job_id": job_id, "status": "queued"}


@app.get("/api/ml/status/{job_id}")
def status(job_id: str) -> JSONResponse:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
    if not job:
        raise HTTPException(404, "Unknown job id.")
    return JSONResponse(_sanitize({k: v for k, v in job.items() if k != "result"}))


@app.get("/api/ml/result/{job_id}")
def result(job_id: str) -> JSONResponse:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
    if not job:
        raise HTTPException(404, "Unknown job id.")
    if job.get("status") != "succeeded":
        raise HTTPException(409, f"Job is {job.get('status')}: {job.get('message')}")
    return JSONResponse(job["result"])


@app.get("/api/ml/runs")
def runs() -> list[dict[str, Any]]:
    return _load_runs()


@app.get("/api/ml/metrics")
def metrics() -> dict[str, Any]:
    p = ARTIFACTS / "model.json"
    if not p.exists():
        raise HTTPException(404, "No trained model artifact yet.")
    return json.loads(p.read_text())["metrics"]


@app.post("/api/ml/predict")
def predict(features: dict[str, float]) -> dict[str, Any]:
    import joblib
    p, m = ARTIFACTS / "model.pkl", ARTIFACTS / "model.json"
    if not p.exists() or not m.exists():
        raise HTTPException(404, "No trained model artifact yet. Train first.")
    meta = json.loads(m.read_text())
    names = meta["preprocessing"]["features"]
    missing = [f for f in names if f not in features]
    if missing:
        raise HTTPException(422, f"missing features: {missing}")
    model = joblib.load(p)
    x = [[float(features[f]) for f in names]]
    delta = float(model.predict(x)[0])
    return {"predicted": delta + float(features["lag_1"]), "model": meta["model"]["name"]}