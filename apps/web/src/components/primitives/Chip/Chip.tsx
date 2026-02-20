"use client";

import type { ComponentPropsWithoutRef } from "react";

import { cx } from "$styled-system/css";

import { chipRecipe } from "./Chip.recipe";

export interface ChipProps extends Omit<ComponentPropsWithoutRef<"button">, "size"> {
  selected?: boolean;
  size?: "sm" | "md";
}

export function Chip({ selected = false, size = "md", className, children, ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cx(chipRecipe({ selected, size }), className)}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
