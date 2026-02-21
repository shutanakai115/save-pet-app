import * as React from "react";

import { IconBadge } from "@/components/primitives";

import type { SavingsRecord } from "../types";

import { CATEGORY_ICON_MAP } from "../categories";
import { formatRecordDate } from "../date";
import {
  recordCardAmountRecipe,
  recordCardBodyRecipe,
  recordCardCategoryBadgeRecipe,
  recordCardDateRecipe,
  recordCardDescriptionRecipe,
  recordCardRecipe,
} from "./RecordCard.recipe";

interface RecordCardProps {
  record: SavingsRecord;
}

const yenFormatter = new Intl.NumberFormat("ja-JP");
const ViewTransitionComponent =
  (
    React as typeof React & {
      ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).ViewTransition ??
  (
    React as typeof React & {
      unstable_ViewTransition?: React.ComponentType<
        React.PropsWithChildren<{ name?: string; share?: string }>
      >;
    }
  ).unstable_ViewTransition;

export function RecordCard({ record }: RecordCardProps) {
  const Icon = CATEGORY_ICON_MAP[record.category];
  const content = (
    <li className={recordCardRecipe()}>
      <IconBadge
        variant="filled"
        size="md"
        className={recordCardCategoryBadgeRecipe({ category: record.category })}
      >
        <Icon size={20} />
      </IconBadge>
      <div className={recordCardBodyRecipe()}>
        <p className={recordCardDateRecipe()}>{formatRecordDate(record.date)}</p>
        <p className={recordCardDescriptionRecipe()}>{record.description}</p>
      </div>
      <p className={recordCardAmountRecipe()}>+¥{yenFormatter.format(record.amount)}</p>
    </li>
  );

  if (!ViewTransitionComponent) {
    return content;
  }
  return (
    <ViewTransitionComponent name={`record-${record.id}`} share="shared-record">
      {content}
    </ViewTransitionComponent>
  );
}
