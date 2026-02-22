"use client";

import { PiggyBank } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/primitives";

import { DrawerStep } from "../../../_layout";
import {
  savingsEntrySuccessAmountRecipe,
  savingsEntrySuccessMessageRecipe,
  savingsEntrySuccessPanelRecipe,
  savingsEntrySuccessPigRecipe,
  savingsEntrySuccessPigWrapRecipe,
  savingsEntrySuccessTotalRecipe,
} from "./SavingsEntrySuccessStep.recipe";

interface SavingsEntrySuccessStepProps {
  amount: number;
  totalAmount: number;
  onClose: () => void;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

export function SavingsEntrySuccessStep({
  amount,
  totalAmount,
  onClose,
}: SavingsEntrySuccessStepProps) {
  return (
    <DrawerStep.Root>
      <div className={savingsEntrySuccessPanelRecipe()}>
        <div className={savingsEntrySuccessPigWrapRecipe()} aria-hidden="true">
          <PiggyBank className={savingsEntrySuccessPigRecipe()} aria-hidden="true" />
        </div>

        <p className={savingsEntrySuccessAmountRecipe()}>
          ¥{yenFormatter.format(amount)} 貯金しました！
        </p>
        <p className={savingsEntrySuccessTotalRecipe()}>
          合計: ¥{yenFormatter.format(totalAmount)}
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

        <p className={savingsEntrySuccessMessageRecipe()}>
          素晴らしいですね！明日も無理なく続けていきましょう。
        </p>
      </div>
    </DrawerStep.Root>
  );
}
