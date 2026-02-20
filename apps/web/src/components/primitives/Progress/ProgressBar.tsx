"use client";

import { Progress } from "@base-ui/react/progress";

import {
  progressIndicatorClass,
  progressLabelClass,
  progressRootClass,
  progressTrackClass,
} from "./ProgressBar.recipe";

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export function ProgressBar({ value, max = 100, label, showValue = true }: ProgressBarProps) {
  return (
    <Progress.Root value={value} max={max} className={progressRootClass}>
      {label ? <Progress.Label className={progressLabelClass}>{label}</Progress.Label> : <span />}
      {showValue && <Progress.Value className={progressLabelClass} />}
      <Progress.Track className={progressTrackClass}>
        <Progress.Indicator className={progressIndicatorClass} />
      </Progress.Track>
    </Progress.Root>
  );
}
