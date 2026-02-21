import { cva } from "$styled-system/css";

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
