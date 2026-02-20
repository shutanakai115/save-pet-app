import { cva } from "$styled-system/css";

export const bottomNavigationLinkRecipe = cva({
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

export const bottomNavigationIconWrapRecipe = cva({
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

export const bottomNavigationLabelRecipe = cva({
  base: {
    marginTop: "1",
    fontSize: "10px",
    lineHeight: "1.5",
  },
});
