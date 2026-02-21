import { cva } from "$styled-system/css";

export const drawerStepRootRecipe = cva({
  base: {
    display: "grid",
    gap: "5",
  },
});

export const drawerStepHeaderRecipe = cva({
  base: {
    display: "grid",
    justifyItems: "center",
    gap: "2",
    textAlign: "center",
  },
});

export const drawerStepTitleRecipe = cva({
  base: {
    fontSize: "3xl",
    fontWeight: "800",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    color: "neutral.700",
  },
});

export const drawerStepSubtitleRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "600",
    color: "neutral.500",
  },
});
