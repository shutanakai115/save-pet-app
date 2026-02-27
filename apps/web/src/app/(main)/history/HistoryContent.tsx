"use client";

import { useEffect, useRef, useState } from "react";

import { useAtomValue } from "jotai";

import {
  groupRecordsByMonth,
  HistoryEndMark,
  MonthSection,
  MonthlySummaryCard,
} from "@/app/(main)/_features/history";
import { isReadyAtom, recordsAtom, totalAmountAtom } from "@/app/(main)/_layout";

import { historyContentRecipe, historyMonthSectionsRecipe } from "./history.recipe";

const INITIAL_DISPLAY_COUNT = 20;
const LOAD_MORE_COUNT = 20;

export function HistoryContent() {
  const records = useAtomValue(recordsAtom);
  const totalAmount = useAtomValue(totalAmountAtom);
  const isReady = useAtomValue(isReadyAtom);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayCount((prev) => Math.min(prev + LOAD_MORE_COUNT, records.length));
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [records.length]);

  if (!isReady) return null;

  const displayedRecords = records.slice(0, displayCount);
  const monthGroups = groupRecordsByMonth(displayedRecords);
  const hasMore = displayCount < records.length;

  return (
    <div className={historyContentRecipe()}>
      {/* 合計金額は表示件数に関わらず全1000件ベースで算出 */}
      <MonthlySummaryCard totalAmount={totalAmount} />
      <div className={historyMonthSectionsRecipe()}>
        {monthGroups.map(([month, monthRecords]) => (
          <MonthSection key={month} month={month} records={monthRecords} />
        ))}
      </div>
      {/* 全件表示済みならEndMark、まだあればIntersectionObserverのセンチネル */}
      {hasMore ? (
        <div ref={sentinelRef} style={{ height: 1 }} aria-hidden />
      ) : (
        <HistoryEndMark />
      )}
    </div>
  );
}
