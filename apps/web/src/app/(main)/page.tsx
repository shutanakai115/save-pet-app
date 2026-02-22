import { HomeData, HomeHeader, homePageRootRecipe } from "./_components";
import { DecorativeBackground } from "./_layout";

export default function HomePage() {
  return (
    <div className={homePageRootRecipe()}>
      <DecorativeBackground />
      <HomeHeader />
      <HomeData />
    </div>
  );
}
