/** 0〜100 の範囲に収める */
export function clampPercentage(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
}

/** 貯金総額と目標額から進捗率（%）を算出する */
export function calculateSavingsProgress(totalAmount: number, goalAmount: number): number {
  const safeTotal = Number(totalAmount) || 0;
  const safeGoal = Number(goalAmount) || 0;
  if (safeGoal <= 0) {
    return 0;
  }
  return clampPercentage((safeTotal / safeGoal) * 100);
}

/** ゲージ表示用の達成率（%）を算出する */
export function calculateGoalGaugePercent(value: number, max: number): number {
  const safeValue = Number(value) || 0;
  const safeMax = Math.max(Number(max) || 0, 1);
  const clamped = Math.max(0, Math.min(safeValue, safeMax));
  return Math.round((clamped / safeMax) * 100);
}
