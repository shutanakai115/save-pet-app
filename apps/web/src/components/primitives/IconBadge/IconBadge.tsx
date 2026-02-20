import type { ComponentPropsWithoutRef } from "react";

import { cx } from "$styled-system/css";

import { iconBadgeRecipe } from "./IconBadge.recipe";

export interface IconBadgeProps extends Omit<ComponentPropsWithoutRef<"span">, "children"> {
  variant?: "outlined" | "filled";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function IconBadge({
  variant = "outlined",
  size = "md",
  className,
  "aria-hidden": ariaHidden = true,
  children,
  ...props
}: IconBadgeProps) {
  return (
    <span className={cx(iconBadgeRecipe({ variant, size }), className)} aria-hidden={ariaHidden} {...props}>
      {children}
    </span>
  );
}
