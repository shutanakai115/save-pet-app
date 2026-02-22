import { Bell, PiggyBank } from "lucide-react";

import { IconBadge } from "@/components/primitives";

import {
  homeHeaderBrandRecipe,
  homeHeaderRecipe,
  homeHeaderTitleRecipe,
} from "./HomeHeader.recipe";

export function HomeHeader() {
  return (
    <header className={homeHeaderRecipe()}>
      <div className={homeHeaderBrandRecipe()}>
        <IconBadge variant="outlined" size="md">
          <PiggyBank size={20} strokeWidth={2.25} />
        </IconBadge>
        <h1 className={homeHeaderTitleRecipe()}>つもり貯金</h1>
      </div>
      <IconBadge variant="outlined" size="md">
        <Bell size={18} strokeWidth={2.25} />
      </IconBadge>
    </header>
  );
}
