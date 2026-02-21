import type { SavingsRecord } from "@/components/features/history";
import { DecorativeBackground } from "./_layout";

import {
  HomeHeader,
  RecentRecords,
  SavingsHero,
  homePageRootRecipe,
} from "./_components";

const sampleData = {
  totalAmount: 12500,
  goalAmount: 50000,
  records: [
    { id: "1", date: "2026-02-24", description: "カフェで我慢", amount: 300, category: "cafe" },
    { id: "2", date: "2026-02-22", description: "お弁当持参", amount: 500, category: "dining" },
    {
      id: "3",
      date: "2026-02-18",
      description: "服を買うのを我慢",
      amount: 2500,
      category: "online",
    },
  ] satisfies SavingsRecord[],
};

export default function HomePage() {
  return (
    <div className={homePageRootRecipe()}>
      <DecorativeBackground />

      <HomeHeader />
      <SavingsHero totalAmount={sampleData.totalAmount} goalAmount={sampleData.goalAmount} />
      <RecentRecords records={sampleData.records} />
    </div>
  );
}
