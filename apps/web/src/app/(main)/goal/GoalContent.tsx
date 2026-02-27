"use client";

import { useAtomValue } from "jotai";
import { HandCoins } from "lucide-react";

import { RecentRecords } from "@/app/(main)/_features/history";
import { goalAtom, isReadyAtom, recentRecordsAtom, totalAmountAtom } from "@/app/(main)/_layout";

import {
  goalAmountBadgeRecipe,
  goalCardRecipe,
  goalContentRecipe,
  goalNameRecipe,
  goalProgressAmountRecipe,
  goalRemainingBadgeRecipe,
} from "./goal.recipe";
import { GoalChangeTrigger } from "./GoalChangeDrawer";
import { GoalGauge } from "./GoalGauge";

const yenFormatter = new Intl.NumberFormat("ja-JP");

export function GoalContent() {
  const currentAmount = useAtomValue(totalAmountAtom);
  const goal = useAtomValue(goalAtom);
  const recentRecords = useAtomValue(recentRecordsAtom);
  const isReady = useAtomValue(isReadyAtom);

  if (!isReady) return null;

  const targetAmount = Number(goal?.targetAmount) || 0;
  const remainingAmount = Math.max(targetAmount - currentAmount, 0);

  return (
    <div className={goalContentRecipe()}>
      <section className={goalCardRecipe()} aria-label={goal ? "目標の進捗" : "目標の設定"}>
        {goal ? (
          <>
            <h2 className={goalNameRecipe()}>{goal.name}</h2>
            <p className={goalAmountBadgeRecipe()}>¥{yenFormatter.format(targetAmount)}</p>

            <GoalGauge value={currentAmount} max={targetAmount} />

            <p className={goalProgressAmountRecipe()}>
              <HandCoins size={18} />¥{yenFormatter.format(currentAmount)} / ¥
              {yenFormatter.format(targetAmount)}
            </p>
            <p className={goalRemainingBadgeRecipe()}>あと ¥{yenFormatter.format(remainingAmount)}</p>
          </>
        ) : (
          <h2 className={goalNameRecipe()}>目標を設定してください</h2>
        )}

        {/* GoalChangeTrigger は分岐の外側に置き、常に同じ位置でマウントされるようにする */}
        {/* こうすることで goal insert 後の再レンダリングでドロワーがアンマウントされない */}
        <GoalChangeTrigger
          goalName={goal?.name ?? ""}
          category={goal?.category ?? "other"}
          targetAmount={targetAmount}
        />
      </section>

      {goal && <RecentRecords records={recentRecords} />}
    </div>
  );
}
