"use client";

import { useLiveQuery } from "@tanstack/react-db";

import { RecentRecords } from "@/app/(main)/_features/history";
import { goalCollection, savingsRecordsCollection } from "@/lib/db";
import { useMounted } from "@/lib/hooks/useMounted";

import { SavingsHero } from "../SavingsHero";

// SSR ガード: mounted になるまで null を返す
export function HomeData() {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return <HomeDataInner />;
}

// useLiveQuery はクライアントでのみ呼ばれる
function HomeDataInner() {
  const { data: records } = useLiveQuery((q) => q.from({ r: savingsRecordsCollection }));
  const { data: goals } = useLiveQuery((q) => q.from({ g: goalCollection }));

  const allRecords = records ?? [];
  const totalAmount = allRecords.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
  const goal = goals?.[0];
  const goalAmount = Number(goal?.targetAmount) || 0;

  const recentRecords = [...allRecords]
    .toSorted((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <SavingsHero totalAmount={totalAmount} goalAmount={goalAmount} />
      <RecentRecords records={recentRecords} />
    </>
  );
}
