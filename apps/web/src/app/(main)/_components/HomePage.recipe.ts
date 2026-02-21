import { cva } from "$styled-system/css";

export const homePageRootRecipe = cva({
  base: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    marginInline: "-4",
    overflow: "hidden",
  },
});
