import { cva } from "$styled-system/css";

export const pageContainerRecipe = cva({
  base: {
    width: "full",
    marginInline: "auto",
    paddingInline: "page.x",
    flex: 1,
  },
});
