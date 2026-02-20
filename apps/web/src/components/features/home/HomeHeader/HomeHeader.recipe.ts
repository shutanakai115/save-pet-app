import { cva } from "$styled-system/css";

export const homeHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "6",
    paddingTop: "12",
    paddingBottom: "2",
  },
});

export const homeHeaderBrandRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
  },
});

export const homeHeaderTitleRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "bold",
    letterSpacing: "-0.025em",
    color: "#4A4036",
  },
});
