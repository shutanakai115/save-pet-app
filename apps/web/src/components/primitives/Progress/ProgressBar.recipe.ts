import { cva } from "$styled-system/css";

export const progressRootRecipe = cva({
  base: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 2,
    width: "full",
  },
});

export const progressLabelRecipe = cva({
  base: {
    fontSize: "sm",
    color: "fg.muted",
    fontWeight: "medium",
  },
});

export const progressTrackRecipe = cva({
  base: {
    gridColumn: "1 / -1",
    height: "2",
    borderRadius: "full",
    backgroundColor: "secondary.200",
    overflow: "hidden",
  },
});

export const progressIndicatorRecipe = cva({
  base: {
    backgroundColor: "primary.500",
    height: "full",
    transition: "width 220ms ease-in-out",
  },
});
