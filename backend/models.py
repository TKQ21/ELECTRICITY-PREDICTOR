"""Model zoo + metrics. Optional gradient-boosting libs degrade gracefully."""
from __future__ import annotations

from typing import Any

import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.neighbors import KNeighborsRegressor
from sklearn.tree import DecisionTreeRegressor

MetricDict = dict[str, float | None]


def build_models(n_jobs: int = -1) -> list[tuple[str, str, Any]]:
    """(display name, family, estimator). Missing optional libs are skipped."""
    zoo: list[tuple[str, str, Any]] = [
        ("Linear Regression", "linear", LinearRegression()),
        ("Ridge Regression", "linear", Ridge(alpha=1.0, random_state=None)),
        ("Decision Tree", "tree", DecisionTreeRegressor(max_depth=8, min_samples_leaf=3, random_state=42)),
        ("Random Forest", "ensemble", RandomForestRegressor(
            n_estimators=200, max_depth=12, min_samples_leaf=2, n_jobs=n_jobs, random_state=42)),
        ("KNN Regressor", "instance", KNeighborsRegressor(n_neighbors=5, n_jobs=n_jobs)),
    ]
    try:
        from xgboost import XGBRegressor
        zoo.append(("XGBoost", "boosting", XGBRegressor(
            n_estimators=500, learning_rate=0.05, max_depth=6, subsample=0.9,
            colsample_bytree=0.9, tree_method="hist", n_jobs=n_jobs, random_state=42)))
    except Exception:  # pragma: no cover - optional dependency
        pass
    try:
        from lightgbm import LGBMRegressor
        zoo.append(("LightGBM", "boosting", LGBMRegressor(
            n_estimators=500, learning_rate=0.05, num_leaves=31, subsample=0.9,
            n_jobs=n_jobs, random_state=42, verbose=-1)))
    except Exception:  # pragma: no cover
        pass
    try:
        from catboost import CatBoostRegressor
        zoo.append(("CatBoost", "boosting", CatBoostRegressor(
            iterations=500, learning_rate=0.05, depth=6, verbose=0, random_seed=42,
            allow_writing_files=False)))
    except Exception:  # pragma: no cover
        pass
    return zoo


def evaluate(y_true: np.ndarray, y_pred: np.ndarray) -> MetricDict:
    y_true = np.asarray(y_true, dtype="float64")
    y_pred = np.asarray(y_pred, dtype="float64")
    if y_true.size == 0:
        return {"mae": None, "mse": None, "rmse": None, "r2": None, "mape": None}
    err = y_true - y_pred
    mse = float(np.mean(err ** 2))
    sst = float(np.sum((y_true - y_true.mean()) ** 2))
    mape = None
    if not np.any(np.abs(y_true) < 1e-9):
        mape = float(np.mean(np.abs(err / y_true)) * 100)
    return {
        "mae": float(np.mean(np.abs(err))),
        "mse": mse,
        "rmse": float(np.sqrt(mse)),
        "r2": float(1 - np.sum(err ** 2) / sst) if sst > 0 else None,
        "mape": mape,
    }


def importance(model: Any, n_features: int) -> np.ndarray:
    if hasattr(model, "feature_importances_"):
        return np.asarray(model.feature_importances_, dtype="float64")
    if hasattr(model, "coef_"):
        return np.abs(np.asarray(model.coef_, dtype="float64")).ravel()
    return np.zeros(n_features)