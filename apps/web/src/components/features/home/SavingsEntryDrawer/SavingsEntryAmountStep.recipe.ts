import { cva } from "$styled-system/css";

export const savingsEntryAmountPanelRecipe = cva({
  base: {
    display: "grid",
    gap: "3",
    borderRadius: "xl",
    border: "1px solid",
    borderColor: "primary.300",
    backgroundColor: "white",
    paddingX: "4",
    paddingY: "3",
  },
});

export const savingsEntryAmountHintRecipe = cva({
  base: {
    fontSize: "sm",
    color: "neutral.500",
    textAlign: "center",
    fontWeight: "600",
  },
});

export const savingsEntryBackButtonRecipe = cva({
  base: {
    justifySelf: "center",
    minH: "11",
    paddingX: "4",
    color: "neutral.600",
    fontSize: "sm",
    fontWeight: "700",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    _hover: {
      color: "neutral.700",
    },
    _active: {
      color: "neutral.800",
    },
  },
});
