import { evaluate, Metrics } from "./metrics";
import {
  GradientBoosting, KNNRegressor, LinearRegression, Matrix, Model, RandomForest, DecisionTree,
} from "./models";

export interface Row { date: Date; value: number }

export interface SchemaReport {
  dateColumn: string | null;
  targetColumn: string | null;
  candidateTargets: string[];
  totalRows: number;
  usableRows: number;
  droppedMissing: number;
  droppedNonNumeric: number;
  droppedOutliers: number;
  duplicateDates: number;
  medianGapDays: number;
  errors: string[];
  warnings: string[];
}

export const FEATURES = [
  "lag_1", "lag_2", "lag_3", "lag_7", "lag_14",
  "roll_mean_7", "roll_std_7", "roll_mean_14", "diff_1",
  "dow_sin", "dow_cos", "is_weekend", "month_sin", "month_cos", "doy_sin", "doy_cos",
];

/* ------------------------- ingestion + validation ------------------------- */

const isNum = (v: unknown) => v !== "" && v !== null && v !== undefined && !Number.isNaN(Number(v));

export function detectSchema(raw: Record<string, string>[]): { schema: SchemaReport; rows: Row[] } {
  const errors: string[] = [], warnings: string[] = [];
  const cols = Object.keys(raw[0] ?? {});
  const schema: SchemaReport = {
    dateColumn: null, targetColumn: null, candidateTargets: [], totalRows: raw.length,
    usableRows: 0, droppedMissing: 0, droppedNonNumeric: 0, droppedOutliers: 0,
    duplicateDates: 0, medianGapDays: NaN, errors, warnings,
  };
  if (!raw.length) { errors.push("CSV contains no data rows."); return { schema, rows: [] }; }

  // date column: prefer name match, else the column that parses as dates most often
  const parseable = (c: string) =>
    raw.slice(0, 200).filter((r) => r[c] && !Number.isNaN(Date.parse(r[c]))).length;
  const named = cols.find((c) => /date|time|day|period|month|ds\b/i.test(c));
  schema.dateColumn = named && parseable(named) > 0
    ? named
    : cols.map((c) => ({ c, s: parseable(c) })).sort((a, b) => b.s - a.s)[0]?.s > raw.length * 0.4
      ? cols.map((c) => ({ c, s: parseable(c) })).sort((a, b) => b.s - a.s)[0].c
      : null;

  // numeric columns are target candidates
  schema.candidateTargets = cols.filter(
    (c) => c !== schema.dateColumn && raw.slice(0, 200).filter((r) => isNum(r[c])).length > raw.slice(0, 200).length * 0.6,
  );
  schema.targetColumn =
    schema.candidateTargets.find((c) => /consumption|kwh|mwh|gwh|load|demand|usage|electricity|power|energy/i.test(c)) ??
    schema.candidateTargets[0] ?? null;

  if (!schema.dateColumn) errors.push("No parseable date/timestamp column found.");
  if (!schema.targetColumn) errors.push("No numeric consumption/target column found.");
  if (errors.length) return { schema, rows: [] };

  return { schema, rows: buildRows(raw, schema) };
}

export function buildRows(raw: Record<string, string>[], schema: SchemaReport): Row[] {
  const dc = schema.dateColumn!, tc = schema.targetColumn!;
  const out: Row[] = [];
  schema.droppedMissing = 0; schema.droppedNonNumeric = 0; schema.droppedOutliers = 0; schema.duplicateDates = 0;
  for (const r of raw) {
    const d = r[dc], v = r[tc];
    if (d === undefined || d === "" || v === undefined || v === "") { schema.droppedMissing++; continue; }
    const t = Date.parse(d);
    if (Number.isNaN(t) || !isNum(v)) { schema.droppedNonNumeric++; continue; }
    out.push({ date: new Date(t), value: Number(v) });
  }
  out.sort((a, b) => a.date.getTime() - b.date.getTime());

  // collapse duplicate timestamps by mean
  const merged: Row[] = [];
  for (const r of out) {
    const prev = merged[merged.length - 1];
    if (prev && prev.date.getTime() === r.date.getTime()) {
      prev.value = (prev.value + r.value) / 2;
      schema.duplicateDates++;
    } else merged.push({ ...r });
  }

  // outlier clipping via robust MAD (values kept, extreme ones winsorised)
  const vals = merged.map((r) => r.value).sort((a, b) => a - b);
  const med = vals[Math.floor(vals.length / 2)] ?? 0;
  const mad = vals.map((v) => Math.abs(v - med)).sort((a, b) => a - b)[Math.floor(vals.length / 2)] ?? 0;
  if (mad > 0) {
    const hi = med + 8 * 1.4826 * mad, lo = Math.max(0, med - 8 * 1.4826 * mad);
    for (const r of merged) {
      if (r.value > hi) { r.value = hi; schema.droppedOutliers++; }
      else if (r.value < lo) { r.value = lo; schema.droppedOutliers++; }
    }
  }

  const gaps = merged.slice(1).map((r, i) => (r.date.getTime() - merged[i].date.getTime()) / 86400000).sort((a, b) => a - b);
  schema.medianGapDays = gaps.length ? gaps[Math.floor(gaps.length / 2)] : NaN;
  schema.usableRows = merged.length;
  if (merged.length < 60) schema.warnings.push(`Only ${merged.length} usable observations — metrics on a test split this small are unreliable. 200+ rows recommended.`);
  if (schema.medianGapDays && Math.abs(schema.medianGapDays - 1) > 0.01)
    schema.warnings.push(`Median gap between observations is ${schema.medianGapDays} days (not daily) — lag features are index-based, not calendar-based.`);
  return merged;
}

/* ------------------------- feature engineering ------------------------- */

export function makeFeatures(rows: Row[]): { X: Matrix; y: number[]; dates: Date[] } {
  const X: Matrix = [], y: number[] = [], dates: Date[] = [];
  const v = rows.map((r) => r.value);
  for (let i = 14; i < rows.length; i++) {
    const w7 = v.slice(i - 7, i), w14 = v.slice(i - 14, i);
    const m7 = w7.reduce((a, b) => a + b, 0) / 7;
    const s7 = Math.sqrt(w7.reduce((a, b) => a + (b - m7) ** 2, 0) / 7);
    const d = rows[i].date;
    const dow = d.getDay();
    const doy = Math.floor((d.getTime() - Date.UTC(d.getFullYear(), 0, 0)) / 86400000);
    X.push([
      v[i - 1], v[i - 2], v[i - 3], v[i - 7], v[i - 14],
      m7, s7, w14.reduce((a, b) => a + b, 0) / 14, v[i - 1] - v[i - 2],
      Math.sin((2 * Math.PI * dow) / 7), Math.cos((2 * Math.PI * dow) / 7), dow === 0 || dow === 6 ? 1 : 0,
      Math.sin((2 * Math.PI * (d.getMonth() + 1)) / 12), Math.cos((2 * Math.PI * (d.getMonth() + 1)) / 12),
      Math.sin((2 * Math.PI * doy) / 365.25), Math.cos((2 * Math.PI * doy) / 365.25),
    ]);
    y.push(v[i]);
    dates.push(d);
  }
  return { X, y, dates };
}

/* ------------------------- training ------------------------- */

export interface ModelResult {
  name: string;
  family: string;
  params: Record<string, number | string>;
  val: Metrics;
  test: Metrics;
  trainSeconds: number;
  importance: { feature: string; value: number }[];
  testPred: number[];
}

export interface PipelineResult {
  schema: SchemaReport;
  splits: { train: number; val: number; test: number };
  results: ModelResult[];
  best: ModelResult;
  bestModel: Model;
  testDates: string[];
  testActual: number[];
  forecast: { date: string; predicted: number }[];
  baseline: Metrics; // naive lag-1 persistence
  runId: string;
  finishedAt: string;
}

function makeModels(): Model[] {
  return [
    new LinearRegression(0, "Linear Regression"),
    new LinearRegression(0.5, "Ridge Regression"),
    new DecisionTree(6, 3),
    new RandomForest(40, 8, 2, 42),
    new GradientBoosting("Gradient Boosting (XGBoost-style)", 150, 0.07, 3, 0.9, 1, 7),
    new GradientBoosting("Gradient Boosting (LightGBM-style, deeper/faster LR)", 120, 0.12, 5, 0.8, 1, 11),
    new GradientBoosting("Gradient Boosting (CatBoost-style, shallow symmetric)", 250, 0.05, 2, 1, 3, 13),
    new KNNRegressor(5),
  ];
}

export function runPipeline(rows: Row[], schema: SchemaReport, horizon = 30): PipelineResult {
  const { X, y, dates } = makeFeatures(rows);
  const n = X.length;
  if (n < 30) throw new Error(`Not enough usable observations after feature engineering (${n}). Need at least 44 raw rows.`);

  // chronological split — never shuffle a time series
  const nTest = Math.max(5, Math.floor(n * 0.15));
  const nVal = Math.max(5, Math.floor(n * 0.15));
  const nTrain = n - nVal - nTest;
  const Xtr = X.slice(0, nTrain), ytr = y.slice(0, nTrain);
  const Xva = X.slice(nTrain, nTrain + nVal), yva = y.slice(nTrain, nTrain + nVal);
  const Xte = X.slice(nTrain + nVal), yte = y.slice(nTrain + nVal);

  const results: ModelResult[] = [];
  const fitted: Model[] = [];
  for (const m of makeModels()) {
    const t0 = performance.now();
    try {
      // all models learn the delta vs lag_1 (stationary target); level is added back on predict
      m.fit(Xtr, ytr.map((v, i) => v - Xtr[i][0]));
      const pred = (M: Matrix) => m.predict(M).map((d, i) => d + M[i][0]);
      const imp = m.importance(FEATURES.length);
      const total = imp.reduce((a, b) => a + b, 0);
      results.push({
        name: m.name, family: m.family, params: m.params,
        val: evaluate(yva, pred(Xva)),
        test: evaluate(yte, pred(Xte)),
        trainSeconds: (performance.now() - t0) / 1000,
        importance: FEATURES.map((f, i) => ({ feature: f, value: total > 0 ? imp[i] / total : 0 }))
          .sort((a, b) => b.value - a.value),
        testPred: pred(Xte),
      });
      fitted.push(m);
    } catch { /* skip a model that fails to converge on this dataset */ }
  }
  if (!results.length) throw new Error("All models failed to train on this dataset.");

  // model selection: lowest validation RMSE (not "accuracy"), tie-break on MAE
  const order = results.map((r, i) => ({ r, i }))
    .sort((a, b) => (a.r.val.rmse - b.r.val.rmse) || (a.r.val.mae - b.r.val.mae));
  const best = order[0].r;
  const bestModel = fitted[order[0].i];

  // naive persistence baseline on the same test window (lag_1)
  const baseline = evaluate(yte, Xte.map((r) => r[0]));

  // recursive multi-step forecast with the selected model
  const series = rows.map((r) => r.value);
  let last = rows[rows.length - 1].date;
  const stepDays = Math.max(1, Math.round(schema.medianGapDays || 1));
  const forecast: { date: string; predicted: number }[] = [];
  const work = [...series];
  for (let h = 0; h < horizon; h++) {
    const d = new Date(last.getTime() + stepDays * 86400000);
    const i = work.length;
    const w7 = work.slice(i - 7), w14 = work.slice(i - 14);
    const m7 = w7.reduce((a, b) => a + b, 0) / 7;
    const s7 = Math.sqrt(w7.reduce((a, b) => a + (b - m7) ** 2, 0) / 7);
    const dow = d.getDay();
    const doy = Math.floor((d.getTime() - Date.UTC(d.getFullYear(), 0, 0)) / 86400000);
    const feat = [
      work[i - 1], work[i - 2], work[i - 3], work[i - 7], work[i - 14],
      m7, s7, w14.reduce((a, b) => a + b, 0) / 14, work[i - 1] - work[i - 2],
      Math.sin((2 * Math.PI * dow) / 7), Math.cos((2 * Math.PI * dow) / 7), dow === 0 || dow === 6 ? 1 : 0,
      Math.sin((2 * Math.PI * (d.getMonth() + 1)) / 12), Math.cos((2 * Math.PI * (d.getMonth() + 1)) / 12),
      Math.sin((2 * Math.PI * doy) / 365.25), Math.cos((2 * Math.PI * doy) / 365.25),
    ];
    const p = Math.max(0, bestModel.predict([feat])[0] + feat[0]);
    forecast.push({ date: d.toISOString().slice(0, 10), predicted: Math.round(p * 100) / 100 });
    work.push(p);
    last = d;
  }

  return {
    schema,
    splits: { train: nTrain, val: nVal, test: nTest },
    results,
    best,
    bestModel,
    testDates: dates.slice(nTrain + nVal).map((d) => d.toISOString().slice(0, 10)),
    testActual: yte,
    forecast,
    baseline,
    runId: `run-${Date.now().toString(36)}`,
    finishedAt: new Date().toISOString(),
  };
}