import { CalendarDays } from "lucide-react";

import type { SavingsRecord } from "../types";

import { formatMonthHeading } from "../date";
import { RecordCard } from "../RecordCard";
import {
  monthSectionHeadingRecipe,
  monthSectionListRecipe,
  monthSectionRecipe,
} from "./MonthSection.recipe";

interface MonthSectionProps {
  month: string; // YYYY-MM
  records: SavingsRecord[];
}

export function MonthSection({ month, records }: MonthSectionProps) {
  return (
    <section className={monthSectionRecipe()} aria-label={formatMonthHeading(`${month}-01`)}>
      <h2 className={monthSectionHeadingRecipe()}>
        <CalendarDays size={16} />
        {formatMonthHeading(`${month}-01`)}
      </h2>
      <ul className={monthSectionListRecipe()}>
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </ul>
    </section>
  );
}
