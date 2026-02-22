import { cva } from "$styled-system/css";

export const goalContentRecipe = cva({
  base: {
    display: "grid",
    gap: "5",
    paddingX: "6",
  },
});

export const goalCardRecipe = cva({
  base: {
    backgroundColor: "#FCFCFC",
    borderRadius: "4xl",
    paddingX: "6",
    paddingTop: "8",
    paddingBottom: "7",
    display: "grid",
    gap: "5",
    boxShadow: "0 8px 24px rgba(31, 42, 68, 0.06)",
  },
});

export const goalNameRecipe = cva({
  base: {
    textAlign: "center",
    fontSize: "xl",
    fontWeight: "bold",
    color: "#1F2A44",
    letterSpacing: "0.01em",
  },
});

export const goalAmountBadgeRecipe = cva({
  base: {
    marginInline: "auto",
    backgroundColor: "#F1EFE9",
    color: "primary.700",
    borderRadius: "full",
    fontSize: "2xl",
    fontWeight: "extrabold",
    lineHeight: "1.1",
    paddingX: "5",
    paddingY: "2",
  },
});

export const goalProgressAmountRecipe = cva({
  base: {
    display: "inline-flex",
    gap: "2",
    alignItems: "center",
    marginInline: "auto",
    color: "#5A6577",
    fontWeight: "semibold",
    fontSize: "sm",
  },
});

export const goalRemainingBadgeRecipe = cva({
  base: {
    marginInline: "auto",
    borderRadius: "full",
    paddingX: "4",
    paddingY: "1",
    backgroundColor: "#ECEFF3",
    color: "#787878",
    fontSize: "sm",
    fontWeight: "medium",
  },
});
