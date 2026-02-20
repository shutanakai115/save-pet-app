"use client";

import { motion } from "motion/react";

import { Button, CurrencyInput } from "@/components/primitives";

import {
  savingsEntryAmountHintRecipe,
  savingsEntryAmountPanelRecipe,
  savingsEntryBackButtonRecipe,
} from "./SavingsEntryAmountStep.recipe";
import {
  savingsEntryStepHeaderRecipe,
  savingsEntryStepRecipe,
  savingsEntryStepTitleRecipe,
} from "./SavingsEntryDetailsStep.recipe";

interface SavingsEntryAmountStepProps {
  amount: number | null;
  onAmountChange: (amount: number | null) => void;
  onBack: () => void;
  onNext: () => void;
}

export function SavingsEntryAmountStep({ amount, onAmountChange, onBack, onNext }: SavingsEntryAmountStepProps) {
  const canNext = amount != null && amount > 0;

  return (
    <section className={savingsEntryStepRecipe()}>
      <header className={savingsEntryStepHeaderRecipe()}>
        <h2 className={savingsEntryStepTitleRecipe()}>いくら分？</h2>
      </header>

      <div className={savingsEntryAmountPanelRecipe()}>
        <CurrencyInput
          value={amount}
          onValueChange={onAmountChange}
          size="lg"
          aria-label="貯金する金額"
          placeholder="0"
        />
        <p className={savingsEntryAmountHintRecipe()}>金額を入力してください</p>
      </div>

      <button type="button" className={savingsEntryBackButtonRecipe()} onClick={onBack}>
        戻る
      </button>

      <motion.div
        whileTap={canNext ? { scale: 0.9, y: 4 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
      >
        <Button variant="cta" size="xl" fullWidth disabled={!canNext} onClick={onNext}>
          次へ →
        </Button>
      </motion.div>
    </section>
  );
}
