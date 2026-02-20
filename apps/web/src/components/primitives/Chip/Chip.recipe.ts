"use client";

import { cva } from "$styled-system/css";

export const chipRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    border: "1px solid",
    fontWeight: "medium",
    color: "fg.DEFAULT",
    transition: "all 0.18s ease-in-out",
    _active: {
      transform: "scale(0.98)",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.300",
      outlineOffset: "2px",
    },
  },
  variants: {
    selected: {
      true: {
        borderColor: "secondary.500",
        backgroundColor: "secondary.200",
        _hover: {
          borderColor: "secondary.500",
          backgroundColor: "secondary.300",
        },
      },
      false: {
        borderColor: "secondary.300",
        backgroundColor: "white",
        _hover: {
          borderColor: "secondary.500",
          backgroundColor: "secondary.100",
        },
      },
    },
    size: {
      sm: { minH: "8", paddingX: 3, fontSize: "xs" },
      md: { minH: "9", paddingX: 4, fontSize: "sm" },
    },
  },
  defaultVariants: {
    selected: false,
    size: "md",
  },
});
