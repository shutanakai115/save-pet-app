import { cva } from "$styled-system/css";

export const sectionHeaderRootRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const sectionHeaderTitleWrapRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
  },
});

export const sectionHeaderDotRecipe = cva({
  base: {
    width: "2",
    height: "2",
    borderRadius: "full",
    backgroundColor: "#FF7F50",
  },
});

export const sectionHeaderTitleRecipe = cva({
  base: {
    fontSize: "base",
    fontWeight: "bold",
    color: "#4A4036",
    lineHeight: "1.5",
  },
});

export const sectionHeaderActionRecipe = cva({
  base: {
    borderRadius: "full",
    backgroundColor: "white",
    border: "1px solid rgba(255,127,80,0.1)",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
    paddingX: "3",
    paddingY: "1.5",
    color: "#FF7F50",
    fontSize: "xs",
    fontWeight: "bold",
    textDecoration: "none",
    lineHeight: "1.5",
  },
});
