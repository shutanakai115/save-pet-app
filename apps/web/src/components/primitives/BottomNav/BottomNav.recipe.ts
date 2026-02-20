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

export const bottomNavLinkRecipe = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    minH: "14",
    textDecoration: "none",
    transition: "color 0.18s ease-in-out",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.300",
      outlineOffset: "2px",
    },
  },
  variants: {
    active: {
      true: { color: "#FFC107", fontWeight: "bold" },
      false: { color: "#9C8E49", fontWeight: "medium" },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const bottomNavIconWrapRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10",
    borderRadius: "full",
    transition: "background-color 0.18s ease-in-out",
  },
  variants: {
    active: {
      true: {
        width: "16",
        backgroundColor: "rgba(255, 193, 7, 0.1)",
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const bottomNavLabelRecipe = cva({
  base: {
    marginTop: "1",
    fontSize: "10px",
    lineHeight: "1.5",
  },
});
