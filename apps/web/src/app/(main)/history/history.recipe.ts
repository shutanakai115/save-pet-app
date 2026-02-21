import { cva } from "$styled-system/css";

export const historyContentRecipe = cva({
  base: {
    display: "grid",
    gap: "8",
    paddingX: "6",
    paddingBottom: "28",
  },
});

export const historyMonthSectionsRecipe = cva({
  base: {
    display: "grid",
    gap: "8",
  },
});
