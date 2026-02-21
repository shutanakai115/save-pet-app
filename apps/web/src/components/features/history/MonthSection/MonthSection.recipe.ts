import { cva } from "$styled-system/css";

export const monthSectionRecipe = cva({
  base: {
    display: "grid",
    gap: "3",
  },
});

export const monthSectionHeadingRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    color: "rgba(140,140,140,0.8)",
    fontSize: "sm",
    fontWeight: "700",
    lineHeight: "1.4",
  },
});

export const monthSectionListRecipe = cva({
  base: {
    display: "grid",
    gap: "3",
  },
});
