"use client";

import { motion } from "motion/react";

import { Button, Chip, Input } from "@/components/primitives";
import { type SavingsCategory, SAVINGS_CATEGORY_OPTIONS } from "@/components/features/history";

import {
  savingsEntryCategoryGridRecipe,
  savingsEntryCategoryChipRecipe,
  savingsEntryFieldGroupRecipe,
  savingsEntryFieldLabelRecipe,
  savingsEntryStepHeaderRecipe,
  savingsEntryStepRecipe,
  savingsEntryStepSubtitleRecipe,
  savingsEntryStepTitleRecipe,
} from "./SavingsEntryDetailsStep.recipe";

interface SavingsEntryDetailsStepProps {
  itemName: string;
  category: SavingsCategory | "";
  onItemNameChange: (value: string) => void;
  onCategoryChange: (value: SavingsCategory) => void;
  onNext: () => void;
}

export function SavingsEntryDetailsStep({
  itemName,
  category,
  onItemNameChange,
  onCategoryChange,
  onNext,
}: SavingsEntryDetailsStepProps) {
  const canNext = itemName.trim().length > 0 && category.length > 0;

  return (
    <section className={savingsEntryStepRecipe()}>
      <header className={savingsEntryStepHeaderRecipe()}>
        <h2 className={savingsEntryStepTitleRecipe()}>何を我慢した？</h2>
        <p className={savingsEntryStepSubtitleRecipe()}>Step 1: 節約の記録</p>
      </header>

      <div className={savingsEntryFieldGroupRecipe()}>
        <p className={savingsEntryFieldLabelRecipe()}>Item Name</p>
        <Input
          value={itemName}
          onChange={(event) => onItemNameChange(event.target.value)}
          placeholder="例: コンビニのお菓子"
          aria-label="節約した項目名"
        />
      </div>

      <div className={savingsEntryFieldGroupRecipe()}>
        <p className={savingsEntryFieldLabelRecipe()}>Category</p>
        <div className={savingsEntryCategoryGridRecipe()}>
          {SAVINGS_CATEGORY_OPTIONS.map((entry) => (
            <Chip
              key={entry.value}
              selected={category === entry.value}
              className={savingsEntryCategoryChipRecipe({
                category: entry.value,
                selected: category === entry.value,
              })}
              onClick={() => onCategoryChange(entry.value)}
            >
              {entry.label}
            </Chip>
          ))}
        </div>
      </div>

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
