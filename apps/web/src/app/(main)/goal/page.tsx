import type { SavingsCategory, SavingsRecord } from "@/components/features/history";
import { HandCoins } from "lucide-react";
import { SubPageLayout } from "../_layout";
import { RecentRecords } from "../_components";
import { GoalGauge } from "./GoalGauge";
import { GoalChangeTrigger } from "./GoalChangeDrawer";
import {
  goalAmountBadgeRecipe,
  goalCardRecipe,
  goalContentRecipe,
  goalNameRecipe,
  goalProgressAmountRecipe,
  goalRemainingBadgeRecipe,
} from "./goal.recipe";

const sampleGoal = {
  name: "新しいヘッドフォン",
  category: "online" as SavingsCategory,
  targetAmount: 30000,
  currentAmount: 12500,
};

const sampleRecentRecords: SavingsRecord[] = [
  { id: "1", date: "2026-02-24", description: "カフェで我慢", amount: 300, category: "cafe" },
  { id: "2", date: "2026-02-22", description: "お弁当持参", amount: 500, category: "dining" },
];

const yenFormatter = new Intl.NumberFormat("ja-JP");

export default function GoalPage() {
  const remainingAmount = Math.max(sampleGoal.targetAmount - sampleGoal.currentAmount, 0);

  return (
    <SubPageLayout title="目標">
      <div className={goalContentRecipe()}>
        <section className={goalCardRecipe()} aria-label="目標の進捗">
          <h2 className={goalNameRecipe()}>{sampleGoal.name}</h2>
          <p className={goalAmountBadgeRecipe()}>¥{yenFormatter.format(sampleGoal.targetAmount)}</p>

          <GoalGauge value={sampleGoal.currentAmount} max={sampleGoal.targetAmount} />

          <p className={goalProgressAmountRecipe()}>
            <HandCoins size={18} />
            ¥{yenFormatter.format(sampleGoal.currentAmount)} / ¥{yenFormatter.format(sampleGoal.targetAmount)}
          </p>
          <p className={goalRemainingBadgeRecipe()}>あと ¥{yenFormatter.format(remainingAmount)}</p>

          <GoalChangeTrigger
            goalName={sampleGoal.name}
            category={sampleGoal.category}
            targetAmount={sampleGoal.targetAmount}
          />
        </section>
      </div>

      <RecentRecords records={sampleRecentRecords} />
    </SubPageLayout>
  );
}
