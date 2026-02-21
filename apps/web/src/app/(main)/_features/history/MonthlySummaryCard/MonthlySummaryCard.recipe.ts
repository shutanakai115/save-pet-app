import { cva } from "$styled-system/css";

export const monthlySummaryCardRecipe = cva({
  base: {
    position: "relative",
    borderRadius: "40px",
    border: "1px solid #FFFFFF",
    backgroundColor: "rgba(255,255,255,0.8)",
    boxShadow: "0px 4px 20px -2px rgba(255,143,163,0.15)",
    padding: "5",
    display: "grid",
    gap: "1",
  },
});

export const monthlySummaryLabelRecipe = cva({
  base: {
    fontSize: "xs",
    lineHeight: "1.33",
    fontWeight: "500",
    color: "#8C8C8C",
  },
});

export const monthlySummaryAmountRecipe = cva({
  base: {
    fontSize: "3xl",
    lineHeight: "1.33",
    fontWeight: "700",
    color: "#FFC105",
  },
});
