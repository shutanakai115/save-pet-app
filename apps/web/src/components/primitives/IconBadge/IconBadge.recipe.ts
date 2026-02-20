import { cva } from "$styled-system/css";

export const iconBadgeRecipe = cva({
  base: {
    borderRadius: "full",
    display: "grid",
    placeItems: "center",
  },
  variants: {
    variant: {
      outlined: {
        backgroundColor: "rgba(255,255,255,0.8)",
        border: "1px solid rgba(255,193,7,0.2)",
        boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
        color: "#FFC107",
      },
      filled: {
        backgroundColor: "#FFF0E8",
      },
    },
    size: {
      sm: { width: "8", height: "8", fontSize: "sm" },
      md: { width: "10", height: "10", fontSize: "base" },
    },
  },
  defaultVariants: {
    variant: "outlined",
    size: "md",
  },
});
