"use client";

import { useLiveQuery } from "@tanstack/react-db";

import {
  groupRecordsByMonth,
  HistoryEndMark,
  MonthSection,
  MonthlySummaryCard,
} from "@/app/(main)/_features/history";
import { savingsRecordsCollection } from "@/lib/db";
import { useMounted } from "@/lib/hooks/useMounted";

import { historyContentRecipe, historyMonthSectionsRecipe } from "./history.recipe";

// SSR ガード: mounted になるまで null を返す
export function HistoryContent() {
  const mounted = useMounted();
  if (!mounted) {return null;}
  return <HistoryContentInner />;
}

// useLiveQuery はクライアントでのみ呼ばれる
function HistoryContentInner() {
  const { data: records } = useLiveQuery((q) => q.from({ r: savingsRecordsCollection }));

  const allRecords = records ?? [];
  const totalAmount = allRecords.reduce((sum, r) => sum + r.amount, 0);
  const monthGroups = groupRecordsByMonth(allRecords);

  return (
    <div className={historyContentRecipe()}>
      <MonthlySummaryCard totalAmount={totalAmount} />
      <div className={historyMonthSectionsRecipe()}>
        {monthGroups.map(([month, monthRecords]) => (
          <MonthSection key={month} month={month} records={monthRecords} />
        ))}
      </div>
      <HistoryEndMark />
    </div>
  );
}
