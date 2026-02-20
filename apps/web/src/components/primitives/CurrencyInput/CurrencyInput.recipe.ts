import { sva } from "$styled-system/css";

export const currencyInputSlotRecipe = sva({
  slots: ["fieldRoot", "label", "control", "prefix", "input", "description", "error"],
  base: {
    fieldRoot: {
      display: "grid",
      gap: "1",
      width: "full",
    },
    label: {
      fontSize: "sm",
      fontWeight: "medium",
      color: "fg.DEFAULT",
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      width: "full",
      borderBottom: "2px solid",
      borderColor: "primary.400",
      transition: "border-color 180ms ease",
      _focusWithin: {
        borderColor: "primary.600",
      },
    },
    prefix: {
      color: "neutral.500",
      fontWeight: "700",
      lineHeight: "1",
      userSelect: "none",
      pointerEvents: "none",
    },
    input: {
      width: "full",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: "primary.500",
      fontWeight: "800",
      lineHeight: "1",
      letterSpacing: "-0.03em",
      WebkitAppearance: "none",
      borderRadius: "0",
      "&::placeholder": {
        color: "neutral.300",
      },
      _focusVisible: {
        outline: "none",
      },
      _disabled: {
        color: "neutral.400",
      },
    },
    description: {
      marginTop: "1",
      fontSize: "sm",
      color: "fg.muted",
    },
    error: {
      marginTop: "1",
      fontSize: "sm",
      color: "error.700",
    },
  },
  variants: {
    size: {
      md: {
        control: {
          minH: "12",
          paddingBottom: "1",
        },
        prefix: {
          fontSize: "2xl",
        },
        input: {
          minH: "12",
          paddingY: "1",
          fontSize: "2xl",
        },
      },
      lg: {
        control: {
          minH: "14",
          paddingBottom: "2",
        },
        prefix: {
          fontSize: "4xl",
        },
        input: {
          minH: "14",
          paddingY: "2",
          fontSize: "6xl",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
