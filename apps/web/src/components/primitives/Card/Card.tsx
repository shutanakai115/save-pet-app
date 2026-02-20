import type { ComponentPropsWithoutRef } from "react";

import { cx } from "$styled-system/css";

import { cardRecipe } from "./Card.recipe";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "accent";
}

export function Card({ variant = "default", className, children, ...props }: CardProps) {
  return (
    <div className={cx(cardRecipe({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
