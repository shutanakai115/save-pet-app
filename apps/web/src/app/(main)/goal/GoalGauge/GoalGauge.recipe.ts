import { cva } from "$styled-system/css";

export const goalGaugeRootRecipe = cva({
  base: {
    width: "64",
    height: "64",
    marginInline: "auto",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const goalGaugeSvgRecipe = cva({
  base: {
    width: "full",
    height: "full",
  },
});

export const goalGaugeCenterRecipe = cva({
  base: {
    position: "absolute",
    inset: "0",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    alignContent: "center",
    gap: "1",
    pointerEvents: "none",
  },
});

export const goalGaugePercentRecipe = cva({
  base: {
    fontSize: "4xl",
    fontWeight: "extrabold",
    color: "#1F2A44",
    lineHeight: "1",
  },
});

export const goalGaugePercentSymbolRecipe = cva({
  base: {
    fontSize: "xl",
    fontWeight: "bold",
    marginLeft: "1",
  },
});

export const goalGaugeCaptionRecipe = cva({
  base: {
    fontSize: "sm",
    color: "#9A9A9A",
  },
});
