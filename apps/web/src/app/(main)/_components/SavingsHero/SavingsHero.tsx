"use client";

import { motion } from "motion/react";

import { SavingsEntryTrigger } from "../SavingsEntryDrawer";
import {
  piggyPlaceholderRecipe,
  piggyBankWrapRecipe,
  savingsAmountLabelRecipe,
  savingsAmountRowRecipe,
  savingsAmountValueRecipe,
  savingsAmountYenRecipe,
  savingsHeroRecipe,
  savingsProgressIndicatorRecipe,
  savingsProgressMetaRecipe,
  savingsProgressRecipe,
  savingsProgressTrackRecipe,
} from "./SavingsHero.recipe";

interface SavingsHeroProps {
  totalAmount: number;
  goalAmount: number;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

function clampPercentage(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
}

export function SavingsHero({ totalAmount, goalAmount }: SavingsHeroProps) {
  const safeTotal = Number(totalAmount) || 0;
  const safeGoal = Number(goalAmount) || 0;
  const progress =
    safeGoal > 0 ? clampPercentage((safeTotal / safeGoal) * 100) : 0;

  return (
    <section className={savingsHeroRecipe()} aria-label="貯金概要">
      <p className={savingsAmountLabelRecipe()}>貯金総額</p>

      <p className={savingsAmountRowRecipe()}>
        <span className={savingsAmountYenRecipe()}>¥</span>
        <span className={savingsAmountValueRecipe()}>{yenFormatter.format(safeTotal)}</span>
      </p>

      <div className={savingsProgressRecipe()}>
        <div className={savingsProgressTrackRecipe()} aria-hidden="true">
          <motion.div
            className={savingsProgressIndicatorRecipe()}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1.2, 0.36, 1] }}
          />
        </div>
        <div className={savingsProgressMetaRecipe()}>
          <span>スタート</span>
          <span>ゴール (¥{yenFormatter.format(safeGoal)})</span>
        </div>
      </div>

      <div className={piggyBankWrapRecipe()} aria-hidden="true">
        <div className={piggyPlaceholderRecipe()}>
          キャラクター画像
          <br />
          プレースホルダー
        </div>
      </div>

      <SavingsEntryTrigger currentTotalAmount={safeTotal} />
    </section>
  );
}
