"use client";

import { useAtomValue } from "jotai";

import { RecentRecords } from "@/app/(main)/_features/history";
import { goalAtom, isReadyAtom, recentRecordsAtom, totalAmountAtom } from "@/app/(main)/_layout";

import { SavingsHero } from "../SavingsHero";

export function HomeData() {
  const totalAmount = useAtomValue(totalAmountAtom);
  const goal = useAtomValue(goalAtom);
  const recentRecords = useAtomValue(recentRecordsAtom);
  const isReady = useAtomValue(isReadyAtom);

  if (!isReady) return null;

  return (
    <>
      <SavingsHero totalAmount={totalAmount} goalAmount={Number(goal?.targetAmount) || 0} />
      <RecentRecords records={recentRecords} />
    </>
  );
}
