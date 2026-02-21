"use client";

import { Chip, Input } from "@/components/primitives";

import { type SavingsCategory, SAVINGS_CATEGORY_OPTIONS } from "../../../_features/history";
import { DrawerStep } from "../../../_layout";
import {
  savingsEntryCategoryGridRecipe,
  savingsEntryCategoryChipRecipe,
  savingsEntryFieldGroupRecipe,
  savingsEntryFieldLabelRecipe,
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
    <DrawerStep.Root>
      <DrawerStep.Header>
        <DrawerStep.Title>何を我慢した？</DrawerStep.Title>
        <DrawerStep.Subtitle>Step 1: 節約の記録</DrawerStep.Subtitle>
      </DrawerStep.Header>

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

      <DrawerStep.Submit label="次へ →" onSubmit={onNext} canSubmit={canNext} />
    </DrawerStep.Root>
  );
}
