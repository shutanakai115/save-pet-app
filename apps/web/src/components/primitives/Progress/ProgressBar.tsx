"use client";

import { Progress } from "@base-ui/react/progress";

import {
  progressIndicatorRecipe,
  progressLabelRecipe,
  progressRootRecipe,
  progressTrackRecipe,
} from "./ProgressBar.recipe";

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export function ProgressBar({ value, max = 100, label, showValue = true }: ProgressBarProps) {
  return (
    <Progress.Root value={value} max={max} className={progressRootRecipe()}>
      {label ? <Progress.Label className={progressLabelRecipe()}>{label}</Progress.Label> : <span />}
      {showValue && <Progress.Value className={progressLabelRecipe()} />}
      <Progress.Track className={progressTrackRecipe()}>
        <Progress.Indicator className={progressIndicatorRecipe()} />
      </Progress.Track>
    </Progress.Root>
  );
}
