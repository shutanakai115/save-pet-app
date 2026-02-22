"use client";

import { CurrencyInput } from "@/components/primitives";

import { DrawerStep } from "../../../_layout";
import {
  savingsEntryAmountHintRecipe,
  savingsEntryAmountPanelRecipe,
  savingsEntryBackButtonRecipe,
} from "./SavingsEntryAmountStep.recipe";

interface SavingsEntryAmountStepProps {
  amount: number | null;
  onAmountChange: (amount: number | null) => void;
  onBack: () => void;
  onNext: () => void;
}

export function SavingsEntryAmountStep({
  amount,
  onAmountChange,
  onBack,
  onNext,
}: SavingsEntryAmountStepProps) {
  const canNext = amount != null && amount > 0;

  return (
    <DrawerStep.Root>
      <DrawerStep.Header>
        <DrawerStep.Title>いくら分？</DrawerStep.Title>
      </DrawerStep.Header>

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

      <DrawerStep.Submit label="次へ →" onSubmit={onNext} canSubmit={canNext} />
    </DrawerStep.Root>
  );
}
