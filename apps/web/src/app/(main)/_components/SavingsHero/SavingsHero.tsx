"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

import { PiggyMascot } from "../PiggyMascot";
import { SavingsEntryTrigger } from "../SavingsEntryDrawer";
import { calculateSavingsProgress } from "@/lib/savings";

import {
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

export function SavingsHero({ totalAmount, goalAmount }: SavingsHeroProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const celebrateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const safeTotal = Number(totalAmount) || 0;
  const safeGoal = Number(goalAmount) || 0;
  const progress = calculateSavingsProgress(safeTotal, safeGoal);

  const handleSaveComplete = () => {
    setCelebrating(true);
    if (celebrateTimerRef.current) {
      clearTimeout(celebrateTimerRef.current);
    }
    celebrateTimerRef.current = setTimeout(() => setCelebrating(false), 1400);
  };

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

      <div className={piggyBankWrapRecipe()}>
        <PiggyMascot celebrating={celebrating} onClick={() => setDrawerOpen(true)} />
      </div>

      <SavingsEntryTrigger
        currentTotalAmount={safeTotal}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onSaveComplete={handleSaveComplete}
      />
    </section>
  );
}
