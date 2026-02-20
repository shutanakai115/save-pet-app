import { IconBadge, SectionHeader } from "@/components/primitives";

import {
  recordAmountRecipe,
  recordBodyRecipe,
  recordCardRecipe,
  recordDateRecipe,
  recordDescriptionRecipe,
  recordListRecipe,
  recordsPanelRecipe,
} from "./RecentRecords.recipe";

export interface RecentRecordItem {
  id: string;
  date: string;
  description: string;
  amount: number;
  emoji: string;
}

interface RecentRecordsProps {
  records: RecentRecordItem[];
}

const yenFormatter = new Intl.NumberFormat("ja-JP");

function RecordCard({ item }: { item: RecentRecordItem }) {
  return (
    <li className={recordCardRecipe()}>
      <IconBadge variant="filled" size="md">
        {item.emoji}
      </IconBadge>
      <div className={recordBodyRecipe()}>
        <p className={recordDateRecipe()}>{item.date}</p>
        <p className={recordDescriptionRecipe()}>{item.description}</p>
      </div>
      <p className={recordAmountRecipe()}>+¥{yenFormatter.format(item.amount)}</p>
    </li>
  );
}

export function RecentRecords({ records }: RecentRecordsProps) {
  return (
    <section className={recordsPanelRecipe()} aria-label="最近の記録">
      <SectionHeader title="最近の記録" actionLabel="すべて見る" actionHref="/history" />

      <ul className={recordListRecipe()}>
        {records.map((item) => (
          <RecordCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
