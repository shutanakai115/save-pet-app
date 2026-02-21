"use client";

import { motion } from "motion/react";

import {
  goalGaugeCaptionRecipe,
  goalGaugeCenterRecipe,
  goalGaugePercentRecipe,
  goalGaugePercentSymbolRecipe,
  goalGaugeRootRecipe,
  goalGaugeSvgRecipe,
} from "./GoalGauge.recipe";

interface GoalGaugeProps {
  value: number;
  max: number;
}

export function GoalGauge({ value, max }: GoalGaugeProps) {
  const safeMax = Math.max(max, 1);
  const clamped = Math.max(0, Math.min(value, safeMax));
  const progress = clamped / safeMax;
  const percent = Math.round(progress * 100);

  const SIZE = 256;
  const STROKE_WIDTH = 24;
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CENTER = SIZE / 2;

  return (
    <div className={goalGaugeRootRecipe()}>
      <svg className={goalGaugeSvgRecipe()} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#F2DDDD"
          strokeWidth={STROKE_WIDTH}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--colors-primary-500)"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress }}
          transition={{ duration: 0.95, ease: [0.22, 1.2, 0.36, 1] }}
        />
      </svg>

      <motion.div
        className={goalGaugeCenterRecipe()}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={goalGaugePercentRecipe()}>
          {percent}
          <span className={goalGaugePercentSymbolRecipe()}>%</span>
        </p>
        <p className={goalGaugeCaptionRecipe()}>達成率</p>
      </motion.div>
    </div>
  );
}
