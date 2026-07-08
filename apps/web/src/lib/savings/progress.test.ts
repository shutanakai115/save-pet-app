import { describe, expect, it } from "vitest";

import { calculateGoalGaugePercent, calculateSavingsProgress, clampPercentage } from "./progress";

describe("clampPercentage", () => {
  it("NaN の場合は 0 を返す", () => {
    expect(clampPercentage(Number.NaN)).toBe(0);
  });

  it("負の値は 0 に丸める", () => {
    expect(clampPercentage(-10)).toBe(0);
  });

  it("100 を超える値は 100 に丸める", () => {
    expect(clampPercentage(150)).toBe(100);
  });

  it("0〜100 の範囲内はそのまま返す", () => {
    expect(clampPercentage(42.5)).toBe(42.5);
  });
});

describe("calculateSavingsProgress", () => {
  it("目標額が 0 の場合は 0 を返す", () => {
    expect(calculateSavingsProgress(5000, 0)).toBe(0);
  });

  it("進捗率を百分率で算出する", () => {
    expect(calculateSavingsProgress(25000, 100000)).toBe(25);
  });

  it("目標超過時は 100% に丸める", () => {
    expect(calculateSavingsProgress(150000, 100000)).toBe(100);
  });
});

describe("calculateGoalGaugePercent", () => {
  it("達成率を四捨五入して返す", () => {
    expect(calculateGoalGaugePercent(333, 1000)).toBe(33);
  });

  it("max が 0 でも 1 として扱う", () => {
    expect(calculateGoalGaugePercent(50, 0)).toBe(100);
  });

  it("value が max を超える場合は 100% を返す", () => {
    expect(calculateGoalGaugePercent(200, 100)).toBe(100);
  });
});
