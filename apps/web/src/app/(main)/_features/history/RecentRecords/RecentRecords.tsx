import * as React from "react";

import { SectionHeader } from "@/components/primitives";

import { RecordCard } from "../RecordCard";
import { type SavingsRecord } from "../types";
import {
  recentRecordsEmptyRecipe,
  recentRecordsListRecipe,
  recentRecordsPanelRecipe,
} from "./RecentRecords.recipe";

interface RecentRecordsProps {
  records: SavingsRecord[];
}

const ViewTransitionComponent =
  (
    React as typeof React & {
      ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).ViewTransition ??
  (
    React as typeof React & {
      unstable_ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).unstable_ViewTransition;

export function RecentRecords({ records }: RecentRecordsProps) {
  const hasRecords = records.length > 0;

  return (
    <>
      {ViewTransitionComponent ? (
        <ViewTransitionComponent name="records-panel" share="shared-panel">
          <section className={recentRecordsPanelRecipe()} aria-label="最近の記録">
            <SectionHeader title="最近の記録" actionLabel="すべて見る" actionHref="/history" />

            {hasRecords ? (
              <ul className={recentRecordsListRecipe()}>
                {records.map((record) => (
                  <RecordCard key={record.id} record={record} />
                ))}
              </ul>
            ) : (
              <p className={recentRecordsEmptyRecipe()}>最近の記録がありません。</p>
            )}
          </section>
        </ViewTransitionComponent>
      ) : (
        <section className={recentRecordsPanelRecipe()} aria-label="最近の記録">
          <SectionHeader title="最近の記録" actionLabel="すべて見る" actionHref="/history" />

          {hasRecords ? (
            <ul className={recentRecordsListRecipe()}>
              {records.map((record) => (
                <RecordCard key={record.id} record={record} />
              ))}
            </ul>
          ) : (
            <p className={recentRecordsEmptyRecipe()}>最近の記録がありません。</p>
          )}
        </section>
      )}
    </>
  );
}
