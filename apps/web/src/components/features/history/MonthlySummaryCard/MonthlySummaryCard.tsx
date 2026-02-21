import {
  monthlySummaryAmountRecipe,
  monthlySummaryCardRecipe,
  monthlySummaryLabelRecipe,
} from "./MonthlySummaryCard.recipe";

interface MonthlySummaryCardProps {
  totalAmount: number;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

export function MonthlySummaryCard({ totalAmount }: MonthlySummaryCardProps) {
  return (
    <section className={monthlySummaryCardRecipe()} aria-label="今月の貯金総額">
      <p className={monthlySummaryLabelRecipe()}>今月の貯金総額</p>
      <p className={monthlySummaryAmountRecipe()}>¥{yenFormatter.format(totalAmount)}</p>
    </section>
  );
}
