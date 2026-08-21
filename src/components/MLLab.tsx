import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { AlertTriangle, Boxes, FlaskConical, Play, Upload } from "lucide-react";
import { fmt } from "@/ml/metrics";
import {
  ApiResult, ApiRun, BACKEND_DOWN, checkHealth, getResult, getRuns, getStatus, ML_API_URL,
  startTraining,
} from "@/ml/api";

const STAGES = [
  "Uploading dataset",
  "Cleaning data",
  "Feature engineering",
  "Training models",
  "Comparing models",
  "Selecting best model",
  "Complete",
];

/** Map the backend progress percentage to the stage list (no fabricated progress). */
const stageIndex = (progress: number, status: string) => {
  if (status === "succeeded") return 6;
  if (progress >= 90) return 5;
  if (progress >= 25) return 3;
  if (progress >= 15) return 2;
  if (progress >= 5) return 1;
  return 0;
};

const MLLab = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [runs, setRuns] = useState<ApiRun[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stageMsg, setStageMsg] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [health, setHealth] = useState<"checking" | "up" | "down">("checking");
  const [registeredModel, setRegisteredModel] = useState<string | null>(null);
  const cancelled = useRef(false);

  const refreshRuns = async () => {
    try { setRuns(await getRuns()); } catch { /* run history is optional */ }
  };

  useEffect(() => {
    let alive = true;
    checkHealth()
      .then((h) => { if (alive) { setHealth("up"); setRegisteredModel(h.registered_model ?? null); refreshRuns(); } })
      .catch(() => { if (alive) setHealth("down"); });
    return () => { alive = false; cancelled.current = true; };
  }, []);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setResult(null); setError(""); setProgress(0); setStageMsg(""); setStatus("");
    if (!f.name.toLowerCase().endsWith(".csv")) { setError("Please select a .csv file."); setFile(null); return; }
    if (f.size === 0) { setError("The selected CSV file is empty."); setFile(null); return; }
    setFile(f);
  };

  const train = async () => {
    if (!file) return;
    setBusy(true); setError(""); setResult(null); setProgress(0);
    setStatus("queued"); setStageMsg("Uploading dataset");
    try {
      const jobId = await startTraining(file, 30);
      // Poll status until the backend finishes; the UI stays responsive throughout.
      for (;;) {
        await new Promise((r) => setTimeout(r, 1500));
        if (cancelled.current) return;
        const s = await getStatus(jobId);
        setStatus(s.status);
        setProgress(s.progress ?? 0);
        setStageMsg(s.message ?? "");
        if (s.status === "failed") throw new Error(s.error || s.message || "Training failed.");
        if (s.status === "succeeded") break;
      }
      const res = await getResult(jobId);
      setResult(res);
      setHealth("up");
      await refreshRuns();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Training failed.";
      setError(msg);
      if (msg === BACKEND_DOWN) setHealth("down");
      setStatus("failed");
    } finally {
      setBusy(false);
    }
  };

  const schema = result?.schema;
  const cmp = (result?.results ?? [])
    .filter((r) => r.val && r.test)
    .slice()
    .sort((a, b) => (a.val!.rmse ?? Infinity) - (b.val!.rmse ?? Infinity));
  const failed = (result?.results ?? []).filter((r) => r.error);
  const avp = result
    ? result.testDates.map((d, i) => ({
        date: d, actual: result.testActual[i], predicted: result.best.testPred?.[i],
      }))
    : [];
  const activeStage = stageIndex(progress, status);

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
            <p>Every metric below is computed <strong>only</strong> on the historical CSV you upload here, by the Python FastAPI backend. Nothing is simulated. If you upload nothing, no accuracy is claimed.</p>
          </div>
        </div>

        <div className="text-sm font-body">
          {health === "checking" && <span className="text-muted-foreground">Checking ML backend…</span>}
          {health === "up" && (
            <span className="text-neon-green">
              ML backend online at {ML_API_URL}
              {registeredModel ? ` · registered model: ${registeredModel}` : ""}
            </span>
          )}
          {health === "down" && (
            <span className="text-neon-orange">
              ML backend is not running — start it with <code>uvicorn main:app --port 8000</code> in <code>backend/</code> and set <code>VITE_ML_API_URL</code>.
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input ref={fileRef} type="file" accept=".csv" onChange={onUpload} className="hidden" />
          <button onClick={() => fileRef.current?.click()} className="neon-button flex items-center gap-2">
            <Upload className="w-5 h-5" /> {file?.name || "Upload historical CSV"}
          </button>
          <button
            onClick={train}
            disabled={!file || busy || health === "down"}
            className="neon-button neon-button-green flex items-center gap-2 disabled:opacity-40"
          >
            <Play className="w-5 h-5" /> {busy ? "Training on backend…" : "Run model comparison"}
          </button>
        </div>

        {error && <p className="text-neon-orange font-body text-sm">{error}</p>}

        {(busy || status === "succeeded") && (
          <div className="bg-card rounded-lg border border-neon-cyan/30 p-4 space-y-3">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-neon-cyan transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-body">
              {STAGES.map((s, i) => (
                <span key={s} className={i < activeStage ? "text-neon-green" : i === activeStage ? "text-neon-cyan" : "text-muted-foreground"}>
                  {i < activeStage ? "✓ " : i === activeStage ? "▸ " : "· "}{s}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Backend status: {status || "—"} · {progress}% {stageMsg && `· ${stageMsg}`}
            </p>
          </div>
        )}

        {schema && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg border border-neon-cyan/30 p-4 text-sm font-body space-y-1">
              <h3 className="font-display text-neon-skyblue mb-2">Schema detection</h3>
              <p>Date column: <span className="text-neon-cyan">{schema.dateColumn ?? "not found"}</span></p>
              <p>Target column: <span className="text-neon-cyan">{schema.targetColumn ?? "not found"}</span></p>
              <p>Other numeric candidates: {schema.candidateTargets.filter(c => c !== schema.targetColumn).join(", ") || "—"}</p>
              <p>Observation interval (median): {schema.medianGapDays == null ? "n/a" : `${schema.medianGapDays} day(s)`}</p>
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
                      <td className="py-2 pr-4">{fmt(r.val!.rmse, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test!.mae, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test!.mse, 1)}</td>
                      <td className="py-2 pr-4">{fmt(r.test!.rmse, 2)}</td>
                      <td className="py-2 pr-4">{fmt(r.test!.r2, 3)}</td>
                      <td className="py-2 pr-4">{fmt(r.test!.mape, 2)}</td>
                      <td className="py-2 pr-4 text-muted-foreground">{(r.trainSeconds ?? 0).toFixed(2)}</td>
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
              {failed.length > 0 && (
                <p className="text-xs text-neon-yellow mt-1">
                  Skipped by the backend: {failed.map((f) => `${f.name} (${f.error})`).join(" · ")}
                </p>
              )}
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

            {(result.best.importance ?? []).some((i) => i.value > 0) && (
              <div>
                <h3 className="text-lg font-display text-neon-skyblue mb-3">Feature importance / explainability</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={result.best.importance!.slice(0, 10)} layout="vertical" margin={{ left: 40 }}>
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
          </div>
        )}

        {/* MLflow tracking & model registry (from the backend) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Boxes className="w-5 h-5 text-neon-orange" />
            <h3 className="text-lg font-display text-neon-orange">Experiment tracking & model registry (MLflow)</h3>
          </div>
          {result && (
            <p className="text-sm font-body text-neon-green">
              Run {result.runId} · best model “{result.best.name}” ·{" "}
              {result.registeredVersion
                ? `registered as electricity-demand-forecaster version ${result.registeredVersion}`
                : "MLflow registry not available on the backend (model artifact still saved)"}
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
                    <td className="py-2 pr-4">{r.dataset?.rows ?? "—"}</td>
                    <td className="py-2 pr-4">{r.bestModel}</td>
                    <td className="py-2 pr-4">{fmt(r.metrics?.val_rmse ?? null, 2)}</td>
                    <td className="py-2 pr-4">{fmt(r.metrics?.test_rmse ?? null, 2)}</td>
                    <td className="py-2 pr-4">{fmt(r.metrics?.test_r2 ?? null, 3)}</td>
                    <td className="py-2 pr-4 text-neon-green">{r.registeredVersion ? `v${r.registeredVersion}` : "—"}</td>
                  </tr>
                ))}
                {runs.length === 0 && (
                  <tr><td colSpan={8} className="py-2 pr-4 text-muted-foreground">
                    {health === "down" ? "ML backend is not running" : "No tracked runs yet."}
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            All training runs execute in the Python FastAPI backend (scikit-learn / XGBoost / LightGBM / CatBoost) and are logged to MLflow
            with parameters, metrics, experiments and model versions. Nothing is trained in your browser.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default MLLab;
