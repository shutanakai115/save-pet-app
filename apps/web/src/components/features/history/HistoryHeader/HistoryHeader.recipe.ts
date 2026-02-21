import { cva } from "$styled-system/css";

export const historyHeaderRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    padding: "4",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    backdropFilter: "blur(12px)",
    position: "sticky",
    top: "0",
    zIndex: "sticky",
  },
});

export const historyHeaderBackButtonRecipe = cva({
  base: {
    width: "10",
    height: "10",
    borderRadius: "full",
    display: "grid",
    placeItems: "center",
    color: "#4A4A4A",
    textDecoration: "none",
    _hover: {
      backgroundColor: "rgba(255,255,255,0.7)",
    },
  },
});

export const historyHeaderTitleRecipe = cva({
  base: {
    fontSize: "2xl",
    fontWeight: "700",
    lineHeight: "1.4",
    color: "#4A4A4A",
    letterSpacing: "0.025em",
  },
});
