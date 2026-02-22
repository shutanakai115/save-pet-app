import { cva } from "$styled-system/css";

export const stepIndicatorRootRecipe = cva({
  base: {
    display: "flex",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

export const stepIndicatorItemRecipe = cva({
  base: {
    height: "2",
    borderRadius: "full",
    transformOrigin: "center",
    transition:
      "width 220ms ease, background-color 220ms ease, transform 220ms ease, box-shadow 220ms ease",
  },
  variants: {
    active: {
      true: {
        width: "6",
        backgroundColor: "primary.500",
        transform: "scale(1)",
        boxShadow: "0 0 0 4px rgba(245,183,0,0.18)",
      },
      false: {
        width: "2",
        backgroundColor: "secondary.300",
        transform: "scale(0.92)",
        boxShadow: "none",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
