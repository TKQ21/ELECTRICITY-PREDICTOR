export interface Metrics {
  mae: number;
  mse: number;
  rmse: number;
  r2: number;
  mape: number | null; // null when any actual is ~0 (MAPE undefined)
}

export function evaluate(yTrue: number[], yPred: number[]): Metrics {
  const n = yTrue.length;
  if (!n) return { mae: NaN, mse: NaN, rmse: NaN, r2: NaN, mape: null };
  let ae = 0, se = 0;
  for (let i = 0; i < n; i++) {
    const d = yTrue[i] - yPred[i];
    ae += Math.abs(d);
    se += d * d;
  }
  const mean = yTrue.reduce((a, b) => a + b, 0) / n;
  const sst = yTrue.reduce((a, b) => a + (b - mean) ** 2, 0);
  const mse = se / n;

  // MAPE is only mathematically valid when no actual value is zero
  const hasZero = yTrue.some((v) => Math.abs(v) < 1e-9);
  let mape: number | null = null;
  if (!hasZero) {
    mape = (yTrue.reduce((a, v, i) => a + Math.abs((v - yPred[i]) / v), 0) / n) * 100;
  }

  return {
    mae: ae / n,
    mse,
    rmse: Math.sqrt(mse),
    r2: sst > 0 ? 1 - se / sst : NaN,
    mape,
  };
}

export const fmt = (v: number | null, digits = 3) =>
  v === null || v === undefined || Number.isNaN(v) ? "n/a" : v.toFixed(digits);