import { cva } from "$styled-system/css";

export const historyPageRootRecipe = cva({
  base: {
    position: "relative",
    marginInline: "-4",
    minHeight: "full",
    overflow: "hidden",
    background: "linear-gradient(180deg, #FFFDF5 0%, #FFE4E1 100%)",
  },
});

export const historyOverlayRecipe = cva({
  base: {
    position: "relative",
    minHeight: "full",
    backgroundColor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(4px)",
    display: "grid",
    gap: "6",
    paddingBottom: "28",
  },
});

export const historyContentRecipe = cva({
  base: {
    display: "grid",
    gap: "8",
    paddingX: "6",
  },
});

export const historyMonthSectionsRecipe = cva({
  base: {
    display: "grid",
    gap: "8",
  },
});
