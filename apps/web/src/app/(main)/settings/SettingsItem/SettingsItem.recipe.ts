import { cva } from "$styled-system/css";

export const settingsItemRootRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: "5",
    paddingY: "4",
    backgroundColor: "#FCFCFC",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    _last: {
      borderBottom: "none",
    },
  },
});

export const settingsItemBodyRecipe = cva({
  base: {
    display: "grid",
    gap: "0.5",
  },
});

export const settingsItemLabelRecipe = cva({
  base: {
    fontSize: "md",
    fontWeight: "medium",
    color: "#B0AAA3",
    lineHeight: "1.5",
  },
});

export const settingsItemDescriptionRecipe = cva({
  base: {
    fontSize: "sm",
    color: "#C9C4BE",
    lineHeight: "1.4",
  },
});

export const settingsItemBadgeRecipe = cva({
  base: {
    flexShrink: "0",
    borderRadius: "full",
    backgroundColor: "#F0EDE8",
    color: "#A89F95",
    fontSize: "xs",
    fontWeight: "medium",
    paddingX: "2.5",
    paddingY: "1",
    lineHeight: "1",
  },
});
