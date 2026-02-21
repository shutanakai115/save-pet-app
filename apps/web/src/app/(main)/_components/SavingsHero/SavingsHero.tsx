import { SavingsEntryTrigger } from "../SavingsEntryDrawer";
import {
  piggyBankCircleRecipe,
  piggyPlaceholderRecipe,
  piggyBankShadowRecipe,
  piggyBankWrapRecipe,
  savingsAmountLabelRecipe,
  savingsAmountRowRecipe,
  savingsAmountValueRecipe,
  savingsAmountYenRecipe,
  savingsHeroRecipe,
  savingsProgressIndicatorRecipe,
  savingsProgressMetaRecipe,
  savingsProgressRecipe,
  savingsProgressTrackRecipe,
} from "./SavingsHero.recipe";

interface SavingsHeroProps {
  totalAmount: number;
  goalAmount: number;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

function clampPercentage(value: number): number {
  if (Number.isNaN(value)) {
    return 0;
  }
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
}

export function SavingsHero({ totalAmount, goalAmount }: SavingsHeroProps) {
  const progress = clampPercentage((totalAmount / goalAmount) * 100);

  return (
    <section className={savingsHeroRecipe()} aria-label="貯金概要">
      <p className={savingsAmountLabelRecipe()}>貯金総額</p>

      <p className={savingsAmountRowRecipe()}>
        <span className={savingsAmountYenRecipe()}>¥</span>
        <span className={savingsAmountValueRecipe()}>{yenFormatter.format(totalAmount)}</span>
      </p>

      <div className={savingsProgressRecipe()}>
        <div className={savingsProgressTrackRecipe()} aria-hidden="true">
          <div className={savingsProgressIndicatorRecipe()} style={{ width: `${progress}%` }} />
        </div>
        <div className={savingsProgressMetaRecipe()}>
          <span>スタート</span>
          <span>ゴール (¥{yenFormatter.format(goalAmount)})</span>
        </div>
      </div>

      <div className={piggyBankWrapRecipe()} aria-hidden="true">
        <div className={piggyBankCircleRecipe()}>
          <div className={piggyPlaceholderRecipe()}>
            キャラクター画像
            <br />
            プレースホルダー
          </div>
        </div>
        <span className={piggyBankShadowRecipe()} />
      </div>

      <SavingsEntryTrigger currentTotalAmount={totalAmount} />
    </section>
  );
}
