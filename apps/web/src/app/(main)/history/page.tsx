import type { SavingsRecord } from "@/components/features/history";
import {
  groupRecordsByMonth,
  HistoryEndMark,
  HistoryHeader,
  MonthSection,
  MonthlySummaryCard,
} from "@/components/features/history";
import * as React from "react";

import { DecorativeBackground } from "../_components";
import {
  historyContentRecipe,
  historyMonthSectionsRecipe,
  historyOverlayRecipe,
  historyPageRootRecipe,
} from "./history.recipe";

const historyRecords: SavingsRecord[] = [
  { id: "1", date: "2026-02-24", description: "カフェで我慢", amount: 300, category: "cafe" },
  { id: "2", date: "2026-02-22", description: "お弁当持参", amount: 500, category: "dining" },
  { id: "3", date: "2026-02-18", description: "服を買うのを我慢", amount: 2500, category: "online" },
  { id: "4", date: "2026-01-15", description: "一駅歩いた", amount: 250, category: "other" },
  { id: "5", date: "2026-01-10", description: "飲み会を断った", amount: 4000, category: "dining" },
  { id: "6", date: "2026-01-05", description: "コンビニスイーツ我慢", amount: 350, category: "convenience" },
];

const monthGroups = groupRecordsByMonth(historyRecords);
const ViewTransitionComponent =
  (React as typeof React & { ViewTransition?: React.ComponentType<React.PropsWithChildren<{ name?: string; share?: string }>> })
    .ViewTransition ??
  (React as typeof React & { unstable_ViewTransition?: React.ComponentType<React.PropsWithChildren<{ name?: string; share?: string }>> })
    .unstable_ViewTransition;

export default function HistoryPage() {
  const content = (
    <div className={historyContentRecipe()}>
      <MonthlySummaryCard totalAmount={12850} />
      <div className={historyMonthSectionsRecipe()}>
        {monthGroups.map(([month, records]) => (
          <MonthSection key={month} month={month} records={records} />
        ))}
      </div>
      <HistoryEndMark />
    </div>
  );

  return (
    <div className={historyPageRootRecipe()}>
      <DecorativeBackground />
      <div className={historyOverlayRecipe()}>
        <HistoryHeader />
        {ViewTransitionComponent ? (
          <ViewTransitionComponent name="records-panel" share="shared-panel">
            {content}
          </ViewTransitionComponent>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
