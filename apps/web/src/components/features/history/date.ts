import type { SavingsRecord } from "./types";

const weekdayFormatter = new Intl.DateTimeFormat("ja-JP", { weekday: "short" });

function toDate(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00`);
}

export function formatRecordDate(isoDate: string): string {
  const date = toDate(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const weekday = weekdayFormatter.format(date);
  return `${day} (${weekday})`;
}

export function formatMonthHeading(isoDate: string): string {
  const date = toDate(isoDate);
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

export function groupRecordsByMonth(
  records: SavingsRecord[],
): Array<[month: string, records: SavingsRecord[]]> {
  const sorted = [...records].toSorted((a, b) => b.date.localeCompare(a.date));
  const map = new Map<string, SavingsRecord[]>();

  sorted.forEach((record) => {
    const month = record.date.slice(0, 7);
    const existing = map.get(month);
    if (existing) {
      existing.push(record);
      return;
    }
    map.set(month, [record]);
  });

  return Array.from(map.entries()).map(([month, monthRecords]) => [month, monthRecords]);
}
