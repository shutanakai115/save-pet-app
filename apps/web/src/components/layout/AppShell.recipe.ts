import { cva } from "$styled-system/css";

export const appShellRootRecipe = cva({
  base: {
    minHeight: "dvh",
    fontFamily: "sans",
    background: "linear-gradient(180deg, #fffdf8 0%, #fff3f7 100%)",
    color: "fg.DEFAULT",
  },
});

export const appShellBodyRecipe = cva({
  base: {
    minHeight: "dvh",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "calc(3.5rem + env(safe-area-inset-bottom, 0px))",
  },
});
