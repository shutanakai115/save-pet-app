import { describe, expect, it } from "vitest";

import type { SavingsRecord } from "./types";
import { formatMonthHeading, formatRecordDate, groupRecordsByMonth } from "./date";

describe("formatRecordDate", () => {
  it("日付と曜日を日本語形式で返す", () => {
    expect(formatRecordDate("2026-03-08")).toBe("08 (日)");
  });
});

describe("formatMonthHeading", () => {
  it("年月見出しを日本語形式で返す", () => {
    expect(formatMonthHeading("2026-03-08")).toBe("2026年3月");
  });
});

describe("groupRecordsByMonth", () => {
  const records: SavingsRecord[] = [
    {
      id: "1",
      date: "2026-03-10",
      amount: 1000,
      category: "dining",
      description: "ランチ",
    },
    {
      id: "2",
      date: "2026-03-05",
      amount: 500,
      category: "convenience",
      description: "電車",
    },
    {
      id: "3",
      date: "2026-02-20",
      amount: 2000,
      category: "other",
      description: "雑費",
    },
  ];

  it("月ごとにグループ化し、新しい月順で返す", () => {
    const grouped = groupRecordsByMonth(records);

    expect(grouped.map(([month]) => month)).toEqual(["2026-03", "2026-02"]);
    expect(grouped[0]?.[1].map((record) => record.id)).toEqual(["1", "2"]);
  });

  it("同月内は日付降順を維持する", () => {
    const grouped = groupRecordsByMonth(records);
    const marchRecords = grouped[0]?.[1] ?? [];

    expect(marchRecords.map((record) => record.date)).toEqual(["2026-03-10", "2026-03-05"]);
  });
});
