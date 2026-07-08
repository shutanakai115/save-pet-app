"use client";

import { useEffect, type ReactNode } from "react";

import { useSetAtom } from "jotai";

import { useLiveQuery } from "@tanstack/react-db";

import { goalCollection, savingsRecordsCollection } from "@/lib/db";
import { useMounted } from "@/lib/hooks/useMounted";

import { goalAtom, isReadyAtom, recordsAtom } from "./atoms";

// 取得・保持するレコードの上限
const MAX_RECORDS = 1000;

export function SavingsDataProvider({ children }: { children: ReactNode }) {
  const mounted = useMounted();

  // SSR ではデータ同期をスキップしてそのまま children をレンダリング
  if (!mounted) return <>{children}</>;

  return <SavingsDataSyncer>{children}</SavingsDataSyncer>;
}

// useLiveQuery はクライアントでのみ呼ばれる
function SavingsDataSyncer({ children }: { children: ReactNode }) {
  const { data: rawRecords } = useLiveQuery((q) => q.from({ r: savingsRecordsCollection }));
  const { data: goals } = useLiveQuery((q) => q.from({ g: goalCollection }));

  const setRecords = useSetAtom(recordsAtom);
  const setGoal = useSetAtom(goalAtom);
  const setIsReady = useSetAtom(isReadyAtom);

  useEffect(() => {
    // rawRecords / goals どちらかがまだ未解決なら isReady を立てない
    if (rawRecords === undefined || goals === undefined) return;

    const sorted = [...rawRecords]
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, MAX_RECORDS);

    setRecords(sorted);
    setGoal(goals[0]);
    setIsReady(true);
  }, [rawRecords, goals, setRecords, setGoal, setIsReady]);

  return <>{children}</>;
}
