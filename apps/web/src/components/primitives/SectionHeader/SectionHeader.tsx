import type { ComponentPropsWithoutRef } from "react";

import { cx } from "$styled-system/css";
import Link from "next/link";

import {
  sectionHeaderActionRecipe,
  sectionHeaderDotRecipe,
  sectionHeaderRootRecipe,
  sectionHeaderTitleRecipe,
  sectionHeaderTitleWrapRecipe,
} from "./SectionHeader.recipe";

export interface SectionHeaderProps extends Omit<ComponentPropsWithoutRef<"div">, "title"> {
  title: React.ReactNode;
  showDot?: boolean;
  actionLabel?: React.ReactNode;
  actionHref?: string;
  actionClassName?: string;
  titleClassName?: string;
}

export function SectionHeader({
  title,
  showDot = true,
  actionLabel,
  actionHref,
  className,
  actionClassName,
  titleClassName,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cx(sectionHeaderRootRecipe(), className)} {...props}>
      <div className={sectionHeaderTitleWrapRecipe()}>
        {showDot && <span className={sectionHeaderDotRecipe()} aria-hidden="true" />}
        <h2 className={cx(sectionHeaderTitleRecipe(), titleClassName)}>{title}</h2>
      </div>
      {actionLabel && actionHref ? (
        <Link href={actionHref} className={cx(sectionHeaderActionRecipe(), actionClassName)}>
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
