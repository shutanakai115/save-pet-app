"use client";

import { useState } from "react";

import { DrawerStep } from "../../_layout";
import {
  type SavingsCategory,
  SAVINGS_CATEGORY_OPTIONS,
} from "@/components/features/history";
import { BottomSheet, Chip, CurrencyInput, Input, StepIndicator } from "@/components/primitives";

import {
  goalChangeAmountHintRecipe,
  goalChangeAmountPanelRecipe,
  goalChangeBackButtonRecipe,
  goalChangeCategoryChipRecipe,
  goalChangeCategoryGridRecipe,
  goalChangeDrawerContentRecipe,
  goalChangeFieldGroupRecipe,
  goalChangeFieldLabelRecipe,
} from "./GoalChangeDrawer.recipe";
import { GoalChangeSuccessStep } from "./GoalChangeSuccessStep";

type GoalChangeStep = "details" | "amount" | "success";

interface GoalChangeFormData {
  goalName: string;
  category: SavingsCategory | "";
  amount: number | null;
}

interface GoalChangeDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialGoalName: string;
  initialCategory: SavingsCategory;
  initialTargetAmount: number;
  onSaved?: (payload: {
    goalName: string;
    category: SavingsCategory;
    targetAmount: number;
  }) => void | Promise<void>;
}

export function GoalChangeDrawer({
  open,
  onOpenChange,
  initialGoalName,
  initialCategory,
  initialTargetAmount,
  onSaved,
}: GoalChangeDrawerProps) {
  const [step, setStep] = useState<GoalChangeStep>("details");
  const [formData, setFormData] = useState<GoalChangeFormData>({
    goalName: initialGoalName,
    category: initialCategory,
    amount: initialTargetAmount,
  });
  const [isSaving, setIsSaving] = useState(false);

  const closeAndReset = () => {
    setStep("details");
    setFormData({
      goalName: initialGoalName,
      category: initialCategory,
      amount: initialTargetAmount,
    });
    setIsSaving(false);
    onOpenChange(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      closeAndReset();
      return;
    }
    onOpenChange(nextOpen);
  };

  const handleSave = async () => {
    if (formData.amount == null || formData.amount <= 0 || formData.goalName.trim().length === 0 || formData.category === "") {
      return;
    }

    setIsSaving(true);
    try {
      await onSaved?.({
        goalName: formData.goalName.trim(),
        category: formData.category,
        targetAmount: formData.amount,
      });
      setStep("success");
    } finally {
      setIsSaving(false);
    }
  };

  const canProceedDetails = formData.goalName.trim().length > 0 && formData.category !== "";
  const canSubmitAmount = formData.amount != null && formData.amount > 0;

  return (
    <BottomSheet open={open} onOpenChange={handleOpenChange}>
      <div className={goalChangeDrawerContentRecipe()}>
        <StepIndicator
          totalSteps={3}
          currentStep={step === "details" ? 1 : step === "amount" ? 2 : 3}
        />

        {step === "details" ? (
          <DrawerStep.Root>
            <DrawerStep.Header>
              <DrawerStep.Title>どんな目標にする？</DrawerStep.Title>
              <DrawerStep.Subtitle>Step 1: 目標の設定</DrawerStep.Subtitle>
            </DrawerStep.Header>

            <div className={goalChangeFieldGroupRecipe()}>
              <p className={goalChangeFieldLabelRecipe()}>Goal Name</p>
              <Input
                value={formData.goalName}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, goalName: event.target.value }))
                }
                placeholder="例: 新しいヘッドフォン"
                aria-label="目標名"
              />
            </div>

            <div className={goalChangeFieldGroupRecipe()}>
              <p className={goalChangeFieldLabelRecipe()}>Category</p>
              <div className={goalChangeCategoryGridRecipe()}>
                {SAVINGS_CATEGORY_OPTIONS.map((entry) => (
                  <Chip
                    key={entry.value}
                    selected={formData.category === entry.value}
                    className={goalChangeCategoryChipRecipe({
                      category: entry.value,
                      selected: formData.category === entry.value,
                    })}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, category: entry.value }))
                    }
                  >
                    {entry.label}
                  </Chip>
                ))}
              </div>
            </div>

            <DrawerStep.Submit
              label="次へ →"
              onSubmit={() => setStep("amount")}
              canSubmit={canProceedDetails}
            />
          </DrawerStep.Root>
        ) : null}

        {step === "amount" ? (
          <DrawerStep.Root>
            <DrawerStep.Header>
              <DrawerStep.Title>目標金額はいくら？</DrawerStep.Title>
            </DrawerStep.Header>

            <div className={goalChangeAmountPanelRecipe()}>
              <CurrencyInput
                value={formData.amount}
                onValueChange={(amount) => setFormData((prev) => ({ ...prev, amount }))}
                size="lg"
                aria-label="目標金額"
                placeholder="0"
              />
              <p className={goalChangeAmountHintRecipe()}>金額を入力してください</p>
            </div>

            <button type="button" className={goalChangeBackButtonRecipe()} onClick={() => setStep("details")}>
              戻る
            </button>
            <DrawerStep.Submit
              label="保存する"
              onSubmit={handleSave}
              canSubmit={canSubmitAmount}
              loading={isSaving}
            />
          </DrawerStep.Root>
        ) : null}

        {step === "success" ? (
          <GoalChangeSuccessStep targetAmount={formData.amount ?? 0} onClose={closeAndReset} />
        ) : null}
      </div>
    </BottomSheet>
  );
}
