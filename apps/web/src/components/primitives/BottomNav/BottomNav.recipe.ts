import { cva } from "$styled-system/css";

export const bottomNavRootRecipe = cva({
  base: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "docked",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(24px)",
    borderRadius: "24px 24px 0 0",
    boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.03)",
    padding: "12px 24px calc(24px + env(safe-area-inset-bottom, 0px))",
  },
});

export const bottomNavListRecipe = cva({
  base: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
});
