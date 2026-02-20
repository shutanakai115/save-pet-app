"use client";

import { stepIndicatorItemRecipe, stepIndicatorRootClass } from "./StepIndicator.recipe";

export interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, idx) => idx + 1);

  return (
    <ol className={stepIndicatorRootClass} aria-label={`ステップ ${currentStep} / ${totalSteps}`}>
      {steps.map((step) => {
        const active = step === currentStep;
        return (
          <li
            key={step}
            className={stepIndicatorItemRecipe({ active })}
            aria-current={active ? "step" : undefined}
          />
        );
      })}
    </ol>
  );
}
