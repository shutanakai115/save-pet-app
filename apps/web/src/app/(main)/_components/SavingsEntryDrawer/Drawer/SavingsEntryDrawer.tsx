"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

import { BottomSheet, Button, StepIndicator } from "@/components/primitives";
import { savingsRecordsCollection } from "@/lib/db";

import type { SavingsCategory } from "../../../_features/history";

import { SavingsEntryAmountStep } from "../AmountStep";
import { SavingsEntryDetailsStep } from "../DetailsStep";
import { SavingsEntrySuccessStep } from "../SuccessStep";
import { savingsEntryDrawerContentRecipe } from "./SavingsEntryDrawer.recipe";

type SavingsEntryStep = "details" | "amount" | "success";
type TransitionDirection = 1 | -1;

interface SavingsEntryData {
  itemName: string;
  category: SavingsCategory | "";
  amount: number | null;
}

interface SavingsEntryDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTotalAmount: number;
}

const INITIAL_DATA: SavingsEntryData = {
  itemName: "",
  category: "",
  amount: null,
};

const STEP_ORDER: Record<SavingsEntryStep, number> = {
  details: 0,
  amount: 1,
  success: 2,
};

const STEP_NUMBER: Record<SavingsEntryStep, number> = {
  details: 1,
  amount: 2,
  success: 3,
};

const stepMotionVariants = {
  enter: (direction: TransitionDirection) => ({
    opacity: 0,
    x: direction > 0 ? 14 : -14,
    position: "relative" as const,
  }),
  center: {
    opacity: 1,
    x: 0,
    position: "relative" as const,
    transition: {
      duration: 0.18,
      ease: "easeInOut" as const,
      delay: 0.24,
    },
  },
  exit: (direction: TransitionDirection) => ({
    opacity: 0,
    x: direction > 0 ? -14 : 14,
    position: "relative" as const,
    transition: {
      duration: 0.16,
      ease: "easeInOut" as const,
    },
  }),
};

export function SavingsEntryDrawer({
  open,
  onOpenChange,
  currentTotalAmount,
}: SavingsEntryDrawerProps) {
  const [step, setStep] = useState<SavingsEntryStep>("details");
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>(1);
  const [frozenMinHeight, setFrozenMinHeight] = useState<number | null>(null);
  const [entryData, setEntryData] = useState<SavingsEntryData>(INITIAL_DATA);
  const stepContentRef = useRef<HTMLDivElement | null>(null);

  const closeAndReset = () => {
    setTransitionDirection(1);
    setStep("details");
    setEntryData(INITIAL_DATA);
    onOpenChange(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      closeAndReset();
      return;
    }
    onOpenChange(nextOpen);
  };

  const amount = entryData.amount ?? 0;
  const totalAfterSave = currentTotalAmount + amount;

  const moveToStep = (nextStep: SavingsEntryStep) => {
    if (nextStep === step) {
      return;
    }

    if (stepContentRef.current) {
      setFrozenMinHeight(stepContentRef.current.getBoundingClientRect().height);
    }

    const direction: TransitionDirection = STEP_ORDER[nextStep] > STEP_ORDER[step] ? 1 : -1;
    setTransitionDirection(direction);
    setStep(nextStep);
  };

  return (
    <BottomSheet open={open} onOpenChange={handleOpenChange}>
      <div className={savingsEntryDrawerContentRecipe()}>
        <StepIndicator totalSteps={3} currentStep={STEP_NUMBER[step]} />

        <motion.div
          layout
          style={{
            position: "relative",
            minHeight: frozenMinHeight == null ? undefined : `${frozenMinHeight}px`,
          }}
          transition={{ layout: { duration: 0.24, ease: "easeInOut" } }}
        >
          <AnimatePresence initial={false} mode="wait" custom={transitionDirection}>
            <motion.div
              ref={stepContentRef}
              key={step}
              custom={transitionDirection}
              variants={stepMotionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ width: "100%" }}
              onAnimationStart={(definition) => {
                if (definition === "center" && frozenMinHeight != null) {
                  setFrozenMinHeight(null);
                }
              }}
            >
              {step === "details" && (
                <SavingsEntryDetailsStep
                  itemName={entryData.itemName}
                  category={entryData.category}
                  onItemNameChange={(value) =>
                    setEntryData((prev) => ({ ...prev, itemName: value }))
                  }
                  onCategoryChange={(value) =>
                    setEntryData((prev) => ({ ...prev, category: value }))
                  }
                  onNext={() => moveToStep("amount")}
                />
              )}

              {step === "amount" && (
                <SavingsEntryAmountStep
                  amount={entryData.amount}
                  onAmountChange={(nextAmount) =>
                    setEntryData((prev) => ({ ...prev, amount: nextAmount }))
                  }
                  onBack={() => moveToStep("details")}
                  onNext={() => {
                    if (
                      entryData.amount == null ||
                      entryData.amount <= 0 ||
                      entryData.category === ""
                    ) {
                      return;
                    }
                    savingsRecordsCollection.insert({
                      id: crypto.randomUUID(),
                      date: new Date().toISOString().slice(0, 10),
                      description: entryData.itemName.trim(),
                      amount: entryData.amount,
                      category: entryData.category as SavingsCategory,
                    });
                    moveToStep("success");
                  }}
                />
              )}

              {step === "success" && (
                <SavingsEntrySuccessStep
                  amount={amount}
                  totalAmount={totalAfterSave}
                  onClose={closeAndReset}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </BottomSheet>
  );
}

export function SavingsEntryTrigger({ currentTotalAmount }: { currentTotalAmount: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="cta" size="xl" fullWidth onClick={() => setOpen(true)}>
        貯金する！
      </Button>
      <SavingsEntryDrawer
        open={open}
        onOpenChange={setOpen}
        currentTotalAmount={currentTotalAmount}
      />
    </>
  );
}
