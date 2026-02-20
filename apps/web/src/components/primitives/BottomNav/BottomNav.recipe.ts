"use client";

import { css, cva } from "$styled-system/css";

export const bottomNavRootClass = css({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "docked",
  borderTop: "1px solid",
  borderColor: "border.DEFAULT",
  backgroundColor: "white",
  paddingBottom: "calc(env(safe-area-inset-bottom, 0px))",
});

export const bottomNavListClass = css({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
});

export const bottomNavLinkRecipe = cva({
  base: {
    minH: "14",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    textDecoration: "none",
    fontSize: "xs",
    fontWeight: "medium",
    transition: "color 0.18s ease-in-out",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.300",
      outlineOffset: "-2px",
    },
  },
  variants: {
    active: {
      true: { color: "primary.700" },
      false: { color: "neutral.500" },
    },
  },
  defaultVariants: {
    active: false,
  },
});
