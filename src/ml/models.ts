/**
 * Pure-TypeScript model implementations (run in the browser, no Python).
 * NOTE: these are faithful re-implementations of the algorithm families, not
 * bindings to the actual xgboost / lightgbm / catboost libraries.
 */

export type Matrix = number[][];

export interface Model {
  name: string;
  family: string;
  params: Record<string, number | string>;
  fit(X: Matrix, y: number[]): void;
  predict(X: Matrix): number[];
  importance(featureCount: number): number[]; // raw, unnormalised
  serialize(): unknown;
}

/* ---------------- deterministic RNG (reproducible runs) ---------------- */
export function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

/* ---------------- Ridge / Linear Regression (closed form) ---------------- */
function solve(A: Matrix, b: number[]): number[] {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let piv = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    [M[c], M[piv]] = [M[piv], M[c]];
    if (Math.abs(M[c][c]) < 1e-12) M[c][c] = 1e-12;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c] / M[c][c];
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row, i) => row[n] / M[i][i]);
}

export class LinearRegression implements Model {
  name: string;
  family = "linear";
  params: Record<string, number | string>;
  coef: number[] = [];
  intercept = 0;
  stds: number[] = [];
  constructor(private alpha = 0, name = "Linear Regression") {
    this.name = name;
    this.params = { alpha };
  }
  fit(X: Matrix, y: number[]) {
    const n = X.length, p = X[0].length;
    const means = Array.from({ length: p }, (_, j) => X.reduce((a, r) => a + r[j], 0) / n);
    this.stds = Array.from({ length: p }, (_, j) =>
      Math.sqrt(X.reduce((a, r) => a + (r[j] - means[j]) ** 2, 0) / n) || 1);
    const Z = X.map((r) => r.map((v, j) => (v - means[j]) / this.stds[j]));
    const yMean = y.reduce((a, b) => a + b, 0) / n;
    const A: Matrix = Array.from({ length: p }, () => new Array(p).fill(0));
    const b = new Array(p).fill(0);
    for (let j = 0; j < p; j++) {
      for (let k = j; k < p; k++) {
        let s = 0;
        for (let i = 0; i < n; i++) s += Z[i][j] * Z[i][k];
        A[j][k] = s; A[k][j] = s;
      }
      A[j][j] += this.alpha * n;
      let s = 0;
      for (let i = 0; i < n; i++) s += Z[i][j] * (y[i] - yMean);
      b[j] = s;
    }
    const w = solve(A, b);
    this.coef = w.map((v, j) => v / this.stds[j]);
    this.intercept = yMean - this.coef.reduce((a, c, j) => a + c * means[j], 0);
    this.scaledCoef = w;
  }
  scaledCoef: number[] = [];
  predict(X: Matrix) {
    return X.map((r) => this.intercept + r.reduce((a, v, j) => a + v * this.coef[j], 0));
  }
  importance() { return this.scaledCoef.map(Math.abs); }
  serialize() { return { type: "linear", coef: this.coef, intercept: this.intercept }; }
}

/* ---------------- CART regression tree ---------------- */
interface Node { leaf: boolean; value?: number; f?: number; t?: number; l?: Node; r?: Node; }

export function buildTree(
  X: Matrix, g: number[], idx: number[], depth: number, maxDepth: number,
  minSamples: number, featIdx: number[], gains: number[], lambda = 0,
): Node {
  const sum = idx.reduce((a, i) => a + g[i], 0);
  const mean = sum / (idx.length + lambda);
  if (depth >= maxDepth || idx.length < minSamples * 2) return { leaf: true, value: mean };
  const base = idx.reduce((a, i) => a + (g[i] - sum / idx.length) ** 2, 0);
  let best: { f: number; t: number; gain: number; l: number[]; r: number[] } | null = null;
  for (const f of featIdx) {
    const vals = [...new Set(idx.map((i) => X[i][f]))].sort((a, b) => a - b);
    if (vals.length < 2) continue;
    const step = Math.max(1, Math.floor(vals.length / 16));
    for (let vi = step; vi < vals.length; vi += step) {
      const t = (vals[vi - 1] + vals[vi]) / 2;
      const L: number[] = [], R: number[] = [];
      for (const i of idx) (X[i][f] <= t ? L : R).push(i);
      if (L.length < minSamples || R.length < minSamples) continue;
      const sse = (s: number[]) => {
        const m = s.reduce((a, i) => a + g[i], 0) / s.length;
        return s.reduce((a, i) => a + (g[i] - m) ** 2, 0);
      };
      const gain = base - (sse(L) + sse(R));
      if (gain > 0 && (!best || gain > best.gain)) best = { f, t, gain, l: L, r: R };
    }
  }
  if (!best) return { leaf: true, value: mean };
  gains[best.f] += best.gain;
  return {
    leaf: false, f: best.f, t: best.t,
    l: buildTree(X, g, best.l, depth + 1, maxDepth, minSamples, featIdx, gains, lambda),
    r: buildTree(X, g, best.r, depth + 1, maxDepth, minSamples, featIdx, gains, lambda),
  };
}

export function treePredict(node: Node, row: number[]): number {
  let n = node;
  while (!n.leaf) n = row[n.f!] <= n.t! ? n.l! : n.r!;
  return n.value!;
}

export class DecisionTree implements Model {
  name = "Decision Tree";
  family = "tree";
  params: Record<string, number | string>;
  private root!: Node;
  private gains: number[] = [];
  constructor(private maxDepth = 6, private minSamples = 3) {
    this.params = { max_depth: maxDepth, min_samples_leaf: minSamples };
  }
  fit(X: Matrix, y: number[]) {
    this.gains = new Array(X[0].length).fill(0);
    this.root = buildTree(X, y, X.map((_, i) => i), 0, this.maxDepth, this.minSamples,
      X[0].map((_, j) => j), this.gains);
  }
  predict(X: Matrix) { return X.map((r) => treePredict(this.root, r)); }
  importance() { return this.gains; }
  serialize() { return { type: "decision_tree", root: this.root }; }
}

export class RandomForest implements Model {
  name = "Random Forest";
  family = "bagging";
  params: Record<string, number | string>;
  private trees: Node[] = [];
  private gains: number[] = [];
  constructor(private nTrees = 40, private maxDepth = 8, private minSamples = 2, private seed = 42) {
    this.params = { n_estimators: nTrees, max_depth: maxDepth, min_samples_leaf: minSamples, max_features: "sqrt", seed };
  }
  fit(X: Matrix, y: number[]) {
    const rand = rng(this.seed);
    const p = X[0].length;
    const k = Math.max(1, Math.round(Math.sqrt(p)));
    this.gains = new Array(p).fill(0);
    this.trees = [];
    for (let t = 0; t < this.nTrees; t++) {
      const idx = X.map(() => Math.floor(rand() * X.length));
      const feats = [...Array(p).keys()].sort(() => rand() - 0.5).slice(0, Math.max(k, 2));
      this.trees.push(buildTree(X, y, idx, 0, this.maxDepth, this.minSamples, feats, this.gains));
    }
  }
  predict(X: Matrix) {
    return X.map((r) => this.trees.reduce((a, t) => a + treePredict(t, r), 0) / this.trees.length);
  }
  importance() { return this.gains; }
  serialize() { return { type: "random_forest", trees: this.trees }; }
}

/** Gradient boosted trees. `style` only changes hyper-parameters/split strategy. */
export class GradientBoosting implements Model {
  family = "boosting";
  params: Record<string, number | string>;
  private trees: Node[] = [];
  private base = 0;
  private gains: number[] = [];
  constructor(
    public name: string,
    private nTrees = 120,
    private lr = 0.08,
    private maxDepth = 3,
    private subsample = 1,
    private lambda = 1,
    private seed = 7,
  ) {
    this.params = { n_estimators: nTrees, learning_rate: lr, max_depth: maxDepth, subsample, reg_lambda: lambda, seed };
  }
  fit(X: Matrix, y: number[]) {
    const rand = rng(this.seed);
    const p = X[0].length;
    this.gains = new Array(p).fill(0);
    this.base = y.reduce((a, b) => a + b, 0) / y.length;
    let pred = y.map(() => this.base);
    this.trees = [];
    const allFeat = [...Array(p).keys()];
    for (let m = 0; m < this.nTrees; m++) {
      const resid = y.map((v, i) => v - pred[i]);
      const idx = X.map((_, i) => i).filter(() => this.subsample >= 1 || rand() < this.subsample);
      if (idx.length < 4) continue;
      const tree = buildTree(X, resid, idx, 0, this.maxDepth, 2, allFeat, this.gains, this.lambda);
      this.trees.push(tree);
      pred = pred.map((v, i) => v + this.lr * treePredict(tree, X[i]));
    }
  }
  predict(X: Matrix) {
    return X.map((r) => this.base + this.trees.reduce((a, t) => a + this.lr * treePredict(t, r), 0));
  }
  importance() { return this.gains; }
  serialize() { return { type: "gradient_boosting", base: this.base, lr: this.lr, trees: this.trees }; }
}

export class KNNRegressor implements Model {
  name = "K-Nearest Neighbors";
  family = "instance";
  params: Record<string, number | string>;
  private X: Matrix = [];
  private y: number[] = [];
  private mu: number[] = [];
  private sd: number[] = [];
  constructor(private k = 5) { this.params = { n_neighbors: k, metric: "euclidean" }; }
  fit(X: Matrix, y: number[]) {
    const p = X[0].length, n = X.length;
    this.mu = Array.from({ length: p }, (_, j) => X.reduce((a, r) => a + r[j], 0) / n);
    this.sd = Array.from({ length: p }, (_, j) =>
      Math.sqrt(X.reduce((a, r) => a + (r[j] - this.mu[j]) ** 2, 0) / n) || 1);
    this.X = X.map((r) => r.map((v, j) => (v - this.mu[j]) / this.sd[j]));
    this.y = y;
  }
  predict(X: Matrix) {
    return X.map((raw) => {
      const r = raw.map((v, j) => (v - this.mu[j]) / this.sd[j]);
      const d = this.X.map((x, i) => ({ d: x.reduce((a, v, j) => a + (v - r[j]) ** 2, 0), i }));
      d.sort((a, b) => a.d - b.d);
      const kk = Math.min(this.k, d.length);
      return d.slice(0, kk).reduce((a, e) => a + this.y[e.i], 0) / kk;
    });
  }
  importance(featureCount: number) { return new Array(featureCount).fill(0); }
  serialize() { return { type: "knn", k: this.k }; }
}