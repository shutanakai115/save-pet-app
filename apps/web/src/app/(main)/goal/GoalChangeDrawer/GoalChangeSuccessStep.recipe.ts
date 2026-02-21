import { cva } from "$styled-system/css";

export const goalChangeSuccessPanelRecipe = cva({
  base: {
    display: "grid",
    gap: "5",
    justifyItems: "center",
    textAlign: "center",
  },
});

export const goalChangeSuccessIconWrapRecipe = cva({
  base: {
    width: "52",
    height: "52",
    borderRadius: "2xl",
    backgroundColor: "rgba(255,193,7,0.12)",
    border: "1px solid rgba(255,193,7,0.25)",
    display: "grid",
    placeItems: "center",
    boxShadow: "inset 0 2px 12px rgba(255,255,255,0.6)",
  },
});

export const goalChangeSuccessIconRecipe = cva({
  base: {
    width: "7",
    height: "7",
    color: "primary.500",
  },
});

export const goalChangeSuccessAmountRecipe = cva({
  base: {
    fontSize: "4xl",
    fontWeight: "900",
    lineHeight: "1",
    color: "primary.600",
    letterSpacing: "-0.02em",
  },
});

export const goalChangeSuccessMessageRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "600",
    color: "neutral.500",
    maxW: "64",
  },
});
