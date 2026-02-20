import { HomeHeader, RecentRecords, SavingsHero } from "@/components/features/home";
import {
  homeDecorativeCircleRecipe,
  homeDecorativeLayerRecipe,
  homePageRootRecipe,
} from "@/components/features/home/HomePage.recipe";

const sampleData = {
  totalAmount: 12500,
  goalAmount: 50000,
  records: [
    { id: "1", date: "10/24", description: "カフェで我慢", amount: 500, emoji: "☕" },
    { id: "2", date: "10/22", description: "お弁当にした", amount: 800, emoji: "🍱" },
    { id: "3", date: "10/20", description: "おつりを貯金", amount: 200, emoji: "💰" },
  ],
};

export default function HomePage() {
  return (
    <div className={homePageRootRecipe()}>
      <div className={homeDecorativeLayerRecipe()} aria-hidden="true">
        <span className={homeDecorativeCircleRecipe({ tone: "coralSoft", size: "3xl", blur: "xl", position: "topRight" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "goldSoft", size: "2xl", blur: "lg", position: "middleLeft" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "coralSoft", size: "xl", blur: "md", position: "bottomRight" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "coralStrong", size: "md", blur: "none", position: "topRightDot" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "goldStrong", size: "lg", blur: "none", position: "topLeftDot" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "coral", size: "sm", blur: "none", position: "topCenterDot" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "coralStrong", size: "xs", blur: "none", position: "leftMidDot" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "gold", size: "sm", blur: "none", position: "rightMidDot" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "whiteSoft", size: "3xl", blur: "lg", position: "heroTop" })} />
        <span className={homeDecorativeCircleRecipe({ tone: "whiteSoft", size: "2xl", blur: "sm", position: "heroBottom" })} />
      </div>

      <HomeHeader />
      <SavingsHero totalAmount={sampleData.totalAmount} goalAmount={sampleData.goalAmount} />
      <RecentRecords records={sampleData.records} />
    </div>
  );
}
