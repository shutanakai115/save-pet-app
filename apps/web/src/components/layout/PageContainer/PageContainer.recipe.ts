import { cva } from "$styled-system/css";

export const pageContainerRecipe = cva({
  base: {
    width: "full",
    marginInline: "auto",
    paddingInline: "page.x",
    paddingBottom: "calc(6rem + env(safe-area-inset-bottom, 0px))",
    flex: 1,
  },
});
