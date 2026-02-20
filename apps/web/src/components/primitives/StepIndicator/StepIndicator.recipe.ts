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
    transition: "all 0.18s ease-in-out",
  },
  variants: {
    active: {
      true: {
        width: "6",
        backgroundColor: "primary.500",
      },
      false: {
        width: "2",
        backgroundColor: "secondary.300",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
