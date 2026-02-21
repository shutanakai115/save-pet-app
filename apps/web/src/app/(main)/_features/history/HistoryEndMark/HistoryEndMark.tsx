import { historyEndMarkRecipe, historyEndMarkTextRecipe } from "./HistoryEndMark.recipe";

export function HistoryEndMark() {
  return (
    <div className={historyEndMarkRecipe()}>
      <p className={historyEndMarkTextRecipe()}>これ以上の履歴はありません</p>
    </div>
  );
}
