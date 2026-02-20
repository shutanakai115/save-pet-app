"use client";

import { cva } from "$styled-system/css";

export const cardRecipe = cva({
  base: {
    border: "1px solid",
    borderRadius: "2xl",
    padding: 4,
    boxShadow: "sm",
    color: "fg.DEFAULT",
    transition: "border-color 0.18s ease-in-out, box-shadow 0.18s ease-in-out",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "white",
        borderColor: "border.DEFAULT",
      },
      accent: {
        backgroundColor: "secondary.50",
        borderColor: "secondary.200",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
