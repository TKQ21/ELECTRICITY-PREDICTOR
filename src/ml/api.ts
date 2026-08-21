/**
 * Client for the FastAPI ML backend (see backend/main.py).
 * Base URL comes from VITE_ML_API_URL, e.g. http://localhost:8000
 */

export const ML_API_URL =
  (import.meta.env.VITE_ML_API_URL as string | undefined)?.replace(/\/$/, "") ||
  "http://localhost:8000";

export const BACKEND_DOWN = "ML backend is not running";

export interface ApiSchema {
  dateColumn: string | null;
  targetColumn: string | null;
  candidateTargets: string[];
  totalRows: number;
  usableRows: number;
  droppedMissing: number;
  droppedNonNumeric: number;
  droppedOutliers: number;
  duplicateDates: number;
  medianGapDays: number | null;
  errors: string[];
  warnings: string[];
}

export interface ApiMetrics {
  mae: number | null;
  mse: number | null;
  rmse: number | null;
  r2: number | null;
  mape: number | null;
}

export interface ApiModelResult {
  name: string;
  family?: string;
  error?: string;
  params?: Record<string, unknown>;
  val?: ApiMetrics;
  test?: ApiMetrics;
  trainSeconds?: number;
  importance?: { feature: string; value: number }[];
  testPred?: number[];
}

export interface ApiResult {
  schema: ApiSchema;
  splits: { train: number; val: number; test: number };
  results: ApiModelResult[];
  best: Required<Pick<ApiModelResult, "name" | "val" | "test" | "importance" | "testPred">> &
    ApiModelResult;
  baseline: ApiMetrics;
  testDates: string[];
  testActual: number[];
  forecast: { date: string; predicted: number }[];
  runId: string;
  finishedAt: string;
  features: string[];
  registeredVersion?: number | null;
}

export interface ApiJobStatus {
  status: "queued" | "running" | "succeeded" | "failed";
  progress?: number;
  message?: string;
  error?: string;
  fileName?: string;
  schema?: ApiSchema;
}

export interface ApiRun {
  runId: string;
  experiment?: string;
  finishedAt: string;
  dataset: { rows: number; target: string | null; dateColumn: string | null };
  bestModel: string;
  metrics: Record<string, number | null>;
  registeredVersion?: number | null;
}

export interface ApiHealth {
  status: string;
  service: string;
  registered_model?: string | null;
  registered_version?: number | null;
}

class BackendError extends Error {}

async function request<T>(path: string, init?: RequestInit, timeoutMs = 30000): Promise<T> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  let res: Response;
  try {
    res = await fetch(`${ML_API_URL}${path}`, { ...init, signal: ctrl.signal });
  } catch {
    throw new BackendError(BACKEND_DOWN);
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.detail) detail = typeof body.detail === "string" ? body.detail : JSON.stringify(body.detail);
    } catch {
      /* non-JSON error body */
    }
    throw new Error(detail);
  }
  return (await res.json()) as T;
}

export const checkHealth = () => request<ApiHealth>("/api/ml/health", {}, 8000);

export async function startTraining(file: File, horizon = 30): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const data = await request<{ job_id: string }>(
    `/api/ml/train?horizon=${horizon}`,
    { method: "POST", body: form },
    600000,
  );
  if (!data?.job_id) throw new Error("Backend did not return a job id.");
  return data.job_id;
}

export const getStatus = (jobId: string) =>
  request<ApiJobStatus>(`/api/ml/status/${encodeURIComponent(jobId)}`, {}, 15000);

export const getResult = (jobId: string) =>
  request<ApiResult>(`/api/ml/result/${encodeURIComponent(jobId)}`, {}, 60000);

export const getRuns = () => request<ApiRun[]>("/api/ml/runs", {}, 15000);

export const isBackendDown = (err: unknown) =>
  err instanceof Error && err.message === BACKEND_DOWN;
