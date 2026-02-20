import { cva } from "$styled-system/css";

export const circularProgressRootRecipe = cva({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const circularProgressContentRecipe = cva({
  base: {
    position: "absolute",
    textAlign: "center",
    color: "fg.DEFAULT",
  },
});

export const circularProgressPercentRecipe = cva({
  base: {
    fontSize: "2xl",
    fontWeight: "bold",
    color: "primary.700",
  },
});

export const circularProgressCaptionRecipe = cva({
  base: {
    fontSize: "sm",
    color: "fg.muted",
  },
});
