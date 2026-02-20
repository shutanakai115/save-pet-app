"use client";

import {
  circularProgressCaptionClass,
  circularProgressContentClass,
  circularProgressPercentClass,
  circularProgressRootClass,
} from "./CircularProgress.recipe";

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
}

export function CircularProgress({
  value,
  max = 100,
  size = 180,
  strokeWidth = 14,
  showValue = true,
}: CircularProgressProps) {
  const clamped = Math.max(0, Math.min(value, max));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (clamped / max) * circumference;

  return (
    <div className={circularProgressRootClass} style={{ width: `${size}px`, height: `${size}px` }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--colors-secondary-200)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--colors-primary-500)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 220ms ease-in-out" }}
        />
      </svg>

      {showValue && (
        <div className={circularProgressContentClass}>
          <div className={circularProgressPercentClass}>{Math.round((clamped / max) * 100)}%</div>
          <div className={circularProgressCaptionClass}>
            ¥{clamped.toLocaleString()} / ¥{max.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
}
