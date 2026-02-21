"use client";

import { motion } from "motion/react";
import { Target } from "lucide-react";

import { DrawerStep } from "../../_layout";
import { Button } from "@/components/primitives";

import {
  goalChangeSuccessAmountRecipe,
  goalChangeSuccessIconRecipe,
  goalChangeSuccessIconWrapRecipe,
  goalChangeSuccessMessageRecipe,
  goalChangeSuccessPanelRecipe,
} from "./GoalChangeSuccessStep.recipe";

interface GoalChangeSuccessStepProps {
  targetAmount: number;
  onClose: () => void;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

export function GoalChangeSuccessStep({ targetAmount, onClose }: GoalChangeSuccessStepProps) {
  return (
    <DrawerStep.Root>
      <div className={goalChangeSuccessPanelRecipe()}>
        <div className={goalChangeSuccessIconWrapRecipe()} aria-hidden="true">
          <Target className={goalChangeSuccessIconRecipe()} aria-hidden="true" />
        </div>

        <p className={goalChangeSuccessAmountRecipe()}>
          ¥{yenFormatter.format(targetAmount)} に設定しました！
        </p>

        <motion.div
          whileTap={{ scale: 0.9, y: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
        >
          <Button variant="cta" size="xl" fullWidth onClick={onClose}>
            閉じる
          </Button>
        </motion.div>

        <p className={goalChangeSuccessMessageRecipe()}>
          目標に向かって一歩ずつ進めましょう。
        </p>
      </div>
    </DrawerStep.Root>
  );
}
