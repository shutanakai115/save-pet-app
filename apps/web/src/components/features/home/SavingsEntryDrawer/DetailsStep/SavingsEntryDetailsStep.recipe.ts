import { cva } from "$styled-system/css";

export const savingsEntryStepRecipe = cva({
  base: {
    display: "grid",
    gap: "5",
  },
});

export const savingsEntryStepHeaderRecipe = cva({
  base: {
    display: "grid",
    justifyItems: "center",
    gap: "2",
    textAlign: "center",
  },
});

export const savingsEntryStepTitleRecipe = cva({
  base: {
    fontSize: "3xl",
    fontWeight: "800",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    color: "neutral.700",
  },
});

export const savingsEntryStepSubtitleRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "600",
    color: "neutral.500",
  },
});

export const savingsEntryFieldGroupRecipe = cva({
  base: {
    display: "grid",
    gap: "2",
  },
});

export const savingsEntryFieldLabelRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "bold",
    color: "primary.500",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
});

export const savingsEntryCategoryGridRecipe = cva({
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "3",
  },
});
