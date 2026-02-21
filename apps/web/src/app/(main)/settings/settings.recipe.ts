import { cva } from "$styled-system/css";

export const settingsContainerRecipe = cva({
  base: {
    display: "grid",
    gap: "8",
    paddingX: "5",
    paddingBottom: "8",
  },
});

export const settingsSectionRecipe = cva({
  base: {
    display: "grid",
    borderRadius: "2xl",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(31, 42, 68, 0.06)",
  },
});
