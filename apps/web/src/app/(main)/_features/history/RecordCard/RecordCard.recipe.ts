import { cva } from "$styled-system/css";

import type { SavingsCategory } from "../categories";

export const recordCardRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    padding: "3",
    borderRadius: "40px",
    border: "1px solid rgba(243,244,246,0.5)",
    backgroundColor: "white",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
  },
});

export const recordCardBodyRecipe = cva({
  base: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  },
});

export const recordCardDateRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "bold",
    lineHeight: "1.5",
    color: "#9C8E49",
  },
});

export const recordCardDescriptionRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "bold",
    lineHeight: "1.4",
    color: "#4A4036",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const recordCardAmountRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "800",
    lineHeight: "1.55",
    color: "#FFC107",
  },
});

export const recordCardCategoryBadgeRecipe = cva({
  variants: {
    category: {
      convenience: {
        backgroundColor: "#FEF9C3",
        color: "#CA8A04",
      },
      cafe: {
        backgroundColor: "#FFEDD5",
        color: "#F97316",
      },
      online: {
        backgroundColor: "#F3E8FF",
        color: "#A855F7",
      },
      dining: {
        backgroundColor: "#DBEAFE",
        color: "#3B82F6",
      },
      other: {
        backgroundColor: "#DCFCE7",
        color: "#22C55E",
      },
    } satisfies Record<SavingsCategory, Record<string, string>>,
  },
});
