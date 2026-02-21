import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import {
  historyHeaderBackButtonRecipe,
  historyHeaderRecipe,
  historyHeaderTitleRecipe,
} from "./HistoryHeader.recipe";

export function HistoryHeader() {
  return (
    <header className={historyHeaderRecipe()}>
      <Link href="/" aria-label="ホームに戻る" className={historyHeaderBackButtonRecipe()}>
        <ChevronLeft size={18} />
      </Link>
      <h1 className={historyHeaderTitleRecipe()}>履歴</h1>
    </header>
  );
}
