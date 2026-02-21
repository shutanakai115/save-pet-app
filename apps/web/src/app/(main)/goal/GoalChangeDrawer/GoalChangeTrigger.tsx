"use client";

import { PencilLine } from "lucide-react";
import { useState } from "react";

import type { SavingsCategory } from "../../_features/history";

import { GoalChangeDrawer } from "./GoalChangeDrawer";
import { goalChangeTriggerButtonRecipe } from "./GoalChangeDrawer.recipe";

interface GoalChangeTriggerProps {
  goalName: string;
  category: SavingsCategory;
  targetAmount: number;
}

export function GoalChangeTrigger({ goalName, category, targetAmount }: GoalChangeTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={goalChangeTriggerButtonRecipe()}
        onClick={() => setOpen(true)}
      >
        <PencilLine size={18} />
        目標を変更
      </button>

      <GoalChangeDrawer
        open={open}
        onOpenChange={setOpen}
        initialGoalName={goalName}
        initialCategory={category}
        initialTargetAmount={targetAmount}
      />
    </>
  );
}
