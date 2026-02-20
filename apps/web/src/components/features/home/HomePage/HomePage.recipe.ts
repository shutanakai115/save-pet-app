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

export const homeDecorativeLayerRecipe = cva({
  base: {
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    zIndex: "hide",
  },
});

export const homeDecorativeCircleRecipe = cva({
  base: {
    position: "absolute",
    borderRadius: "full",
  },
  variants: {
    tone: {
      coralSoft: { backgroundColor: "rgba(255, 127, 80, 0.1)" },
      coral: { backgroundColor: "rgba(255, 127, 80, 0.3)" },
      coralStrong: { backgroundColor: "rgba(255, 127, 80, 0.4)" },
      goldSoft: { backgroundColor: "rgba(255, 193, 7, 0.1)" },
      gold: { backgroundColor: "rgba(255, 193, 7, 0.2)" },
      goldStrong: { backgroundColor: "rgba(255, 193, 7, 0.3)" },
      whiteSoft: { backgroundColor: "rgba(255, 255, 255, 0.4)" },
    },
    size: {
      xs: { width: "3", height: "3" },
      sm: { width: "4", height: "4" },
      md: { width: "5", height: "5" },
      lg: { width: "8", height: "8" },
      xl: { width: "32", height: "32" },
      "2xl": { width: "48", height: "48" },
      "3xl": { width: "64", height: "64" },
    },
    blur: {
      none: {},
      sm: { filter: "blur(4px)" },
      md: { filter: "blur(24px)" },
      lg: { filter: "blur(40px)" },
      xl: { filter: "blur(64px)" },
    },
    position: {
      topRight: { top: "-12", right: "-12" },
      middleLeft: { top: "78", left: "-10" },
      bottomRight: { bottom: "72", right: "8" },
      topRightDot: { top: "24", right: "8" },
      topLeftDot: { top: "32", left: "12" },
      topCenterDot: { top: "12", left: "1/2", transform: "translateX(-50%)" },
      leftMidDot: { top: "104", left: "10" },
      rightMidDot: { top: "116", right: "14" },
      heroTop: { top: "50", left: "1/2", transform: "translateX(-50%)" },
      heroBottom: { top: "110", left: "1/2", transform: "translateX(-50%)" },
    },
  },
});
