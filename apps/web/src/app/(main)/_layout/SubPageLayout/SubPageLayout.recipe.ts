import { cva } from "$styled-system/css";

export const subPageRootRecipe = cva({
  base: {
    position: "relative",
    marginInline: "-4",
    minHeight: "100dvh",
    overflow: "hidden",
    background: "linear-gradient(180deg, #FFFDF5 0%, #FFE4E1 100%)",
  },
});

export const subPageOverlayRecipe = cva({
  base: {
    position: "relative",
    minHeight: "100dvh",
    backgroundColor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(4px)",
    display: "grid",
    alignContent: "start",
    gap: "6",
  },
});

export const subPageHeaderRecipe = cva({
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

export const subPageHeaderBackButtonRecipe = cva({
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

export const subPageHeaderTitleRecipe = cva({
  base: {
    fontSize: "2xl",
    fontWeight: "700",
    lineHeight: "1.4",
    color: "#4A4A4A",
    letterSpacing: "0.025em",
  },
});
