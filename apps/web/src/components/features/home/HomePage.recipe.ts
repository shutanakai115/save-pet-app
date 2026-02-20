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

export const homeHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "6",
    paddingTop: "12",
    paddingBottom: "2",
  },
});

export const homeHeaderBrandRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
  },
});

export const homeHeaderIconBadgeRecipe = cva({
  base: {
    width: "10",
    height: "10",
    borderRadius: "full",
    display: "grid",
    placeItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,193,7,0.2)",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
    color: "#FFC107",
  },
});

export const homeHeaderTitleRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "bold",
    letterSpacing: "-0.025em",
    color: "#4A4036",
  },
});

export const savingsHeroRecipe = cva({
  base: {
    width: "full",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "5",
    paddingInline: "6",
    paddingBottom: "6",
  },
});

export const savingsAmountLabelRecipe = cva({
  base: {
    borderRadius: "full",
    backgroundColor: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,127,80,0.1)",
    backdropFilter: "blur(4px)",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
    color: "#FF7F50",
    fontSize: "sm",
    fontWeight: "bold",
    letterSpacing: "0.025em",
    paddingX: "4",
    paddingY: "1.5",
  },
});

export const savingsAmountRowRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "baseline",
    color: "#FFC107",
    textShadow: "0px 1px 1px rgba(0,0,0,0.05)",
  },
});

export const savingsAmountYenRecipe = cva({
  base: {
    fontSize: "3xl",
    fontWeight: "bold",
    lineHeight: "1.2",
    opacity: 0.8,
    letterSpacing: "-0.046em",
  },
});

export const savingsAmountValueRecipe = cva({
  base: {
    fontSize: "3.5xl",
    fontWeight: "800",
    lineHeight: "1",
    letterSpacing: "-0.025em",
  },
});

export const savingsProgressRecipe = cva({
  base: {
    width: "full",
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
});

export const savingsProgressTrackRecipe = cva({
  base: {
    width: "full",
    height: "5",
    borderRadius: "full",
    padding: "1",
    backgroundColor: "white",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.05)",
  },
});

export const savingsProgressIndicatorRecipe = cva({
  base: {
    height: "full",
    borderRadius: "full",
    background: "linear-gradient(90deg, #FFC107 0%, #FFB300 100%)",
    boxShadow: "0px 1px 4px rgba(255,193,7,0.4)",
    transition: "width 220ms ease-in-out",
  },
});

export const savingsProgressMetaRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    width: "full",
    paddingX: "2",
    color: "#9C8E49",
    fontSize: "xs",
    fontWeight: "bold",
    lineHeight: "1.5",
    opacity: 0.8,
  },
});

export const piggyBankWrapRecipe = cva({
  base: {
    position: "relative",
    width: "56",
    height: "56",
    display: "grid",
    placeItems: "center",
  },
});

export const piggyBankCircleRecipe = cva({
  base: {
    width: "full",
    height: "full",
    borderRadius: "full",
    border: "4px solid rgba(255,255,255,0.3)",
    background: "linear-gradient(180deg, #FFB300 0%, #FFC107 100%)",
    boxShadow: "0px 15px 35px -5px rgba(255,193,7,0.5)",
    color: "#4A4036",
    display: "grid",
    placeItems: "center",
  },
});

export const piggyPlaceholderRecipe = cva({
  base: {
    width: "40",
    minHeight: "24",
    borderRadius: "lg",
    border: "2px dashed rgba(74,64,54,0.4)",
    backgroundColor: "rgba(255,255,255,0.2)",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    paddingX: "3",
    color: "#4A4036",
    fontSize: "xs",
    fontWeight: "bold",
    lineHeight: "1.4",
  },
});

export const piggyBankSparkRecipe = cva({
  base: {
    position: "absolute",
    color: "#4A4036",
    fontSize: "2.5xl",
    lineHeight: "1",
  },
  variants: {
    position: {
      topRight: { top: "10", right: "7" },
      bottomLeft: { bottom: "9", left: "8" },
    },
  },
});

export const piggyBankShadowRecipe = cva({
  base: {
    position: "absolute",
    left: "1/2",
    transform: "translateX(-50%)",
    bottom: "-4",
    width: "40",
    height: "4",
    borderRadius: "full",
    backgroundColor: "rgba(0,0,0,0.05)",
    filter: "blur(4px)",
  },
});

export const savingsCtaRecipe = cva({
  base: {
    marginTop: "2",
    width: "full",
    minHeight: "16",
    borderRadius: "full",
    border: "2px solid rgba(255,255,255,0.3)",
    backgroundColor: "#FFC107",
    boxShadow: "0px 6px 0px rgba(212,160,23,1)",
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "xl",
    fontWeight: "800",
    letterSpacing: "0.025em",
    lineHeight: "1.4",
    whiteSpace: "nowrap",
    position: "relative",
    overflow: "hidden",
    _before: {
      content: "\"\"",
      position: "absolute",
      insetX: "0.5",
      top: "0.5",
      height: "16",
      borderTopLeftRadius: "full",
      borderTopRightRadius: "full",
      background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
      pointerEvents: "none",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.400",
      outlineOffset: "3px",
    },
  },
});

export const recordsPanelRecipe = cva({
  base: {
    marginTop: "1",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    borderTop: "1px solid rgba(255,255,255,0.6)",
    backgroundColor: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: "0px -5px 25px -5px rgba(0,0,0,0.05)",
    paddingX: "6",
    paddingTop: "6",
    paddingBottom: "28",
    display: "flex",
    flexDirection: "column",
    gap: "4",
  },
});

export const recordsHeaderRecipe = cva({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const recordsTitleWrapRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
  },
});

export const recordsTitleDotRecipe = cva({
  base: {
    width: "2",
    height: "2",
    borderRadius: "full",
    backgroundColor: "#FF7F50",
  },
});

export const recordsTitleRecipe = cva({
  base: {
    fontSize: "base",
    fontWeight: "bold",
    color: "#4A4036",
    lineHeight: "1.5",
  },
});

export const recordsSeeAllRecipe = cva({
  base: {
    borderRadius: "full",
    backgroundColor: "white",
    border: "1px solid rgba(255,127,80,0.1)",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
    paddingX: "3",
    paddingY: "1.5",
    color: "#FF7F50",
    fontSize: "xs",
    fontWeight: "bold",
    textDecoration: "none",
    lineHeight: "1.5",
  },
});

export const recordListRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5",
  },
});

export const recordCardRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    padding: "3",
    borderRadius: "40px",
    border: "1px solid rgba(243,244,246,0.5)",
    backgroundColor: "white",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
  },
});

export const recordIconWrapRecipe = cva({
  base: {
    width: "10",
    height: "10",
    borderRadius: "full",
    backgroundColor: "#FFF0E8",
    display: "grid",
    placeItems: "center",
    fontSize: "base",
  },
});

export const recordBodyRecipe = cva({
  base: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  },
});

export const recordDateRecipe = cva({
  base: {
    fontSize: "xs",
    fontWeight: "bold",
    lineHeight: "1.5",
    color: "#9C8E49",
  },
});

export const recordDescriptionRecipe = cva({
  base: {
    fontSize: "sm",
    fontWeight: "bold",
    lineHeight: "1.4",
    color: "#4A4036",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const recordAmountRecipe = cva({
  base: {
    fontSize: "lg",
    fontWeight: "800",
    lineHeight: "1.55",
    color: "#FFC107",
  },
});
