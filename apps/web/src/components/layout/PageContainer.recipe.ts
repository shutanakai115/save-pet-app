import { cva } from "$styled-system/css";

export const pageContainerRecipe = cva({
  base: {
    width: "full",
    maxWidth: "container.sm",
    marginInline: "auto",
    paddingInline: "page.x",
    paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.5rem)",
    paddingBottom: "6",
    flex: 1,
  },
});
