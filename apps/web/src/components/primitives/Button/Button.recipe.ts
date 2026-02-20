"use client";

import { css, cva } from "$styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    borderRadius: "full",
    fontFamily: "sans",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.18s ease-in-out",
    textDecoration: "none",
    gap: 2,
    lineHeight: "1",
    _focus: {
      outline: "2px solid",
      outlineColor: "primary.400",
      outlineOffset: "2px",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.400",
      outlineOffset: "2px",
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary.500",
        color: "neutral.900",
        borderColor: "primary.500",
        boxShadow: "sm",
        _hover: {
          backgroundColor: "primary.600",
          borderColor: "primary.600",
        },
        _active: {
          backgroundColor: "primary.700",
          borderColor: "primary.700",
          transform: "scale(0.98)",
        },
      },
      secondary: {
        backgroundColor: "secondary.200",
        color: "neutral.900",
        borderColor: "secondary.300",
        _hover: {
          backgroundColor: "secondary.300",
          borderColor: "secondary.400",
        },
        _active: {
          backgroundColor: "secondary.400",
          borderColor: "secondary.500",
          transform: "scale(0.98)",
        },
      },
      outline: {
        backgroundColor: "white",
        color: "neutral.900",
        borderColor: "secondary.400",
        _hover: {
          backgroundColor: "secondary.50",
          borderColor: "secondary.500",
        },
        _active: {
          backgroundColor: "secondary.100",
          borderColor: "secondary.600",
          transform: "scale(0.98)",
        },
      },
      subtle: {
        backgroundColor: "transparent",
        color: "neutral.700",
        borderColor: "transparent",
        _hover: {
          backgroundColor: "secondary.100",
        },
        _active: {
          backgroundColor: "secondary.200",
          transform: "scale(0.98)",
        },
      },
      danger: {
        backgroundColor: "error.600",
        color: "white",
        borderColor: "error.600",
        _hover: {
          backgroundColor: "error.700",
          borderColor: "error.700",
        },
        _active: {
          backgroundColor: "error.800",
          borderColor: "error.800",
          transform: "scale(0.98)",
        },
      },
    },
    size: {
      xs: {
        minH: "9",
        paddingX: 3,
        fontSize: "xs",
        fontWeight: "medium",
      },
      sm: {
        minH: "10",
        paddingX: 4,
        fontSize: "sm",
        fontWeight: "medium",
      },
      md: {
        minH: "11",
        paddingX: 5,
        fontSize: "sm",
        fontWeight: "semibold",
      },
      lg: {
        minH: "12",
        paddingX: 6,
        fontSize: "base",
        fontWeight: "semibold",
      },
      xl: {
        minH: "14",
        paddingX: 8,
        fontSize: "lg",
        fontWeight: "semibold",
      },
    },
    fullWidth: {
      true: { width: "full" },
    },
    loading: {
      true: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
    disabled: {
      true: {
        backgroundColor: "neutral.200",
        borderColor: "neutral.200",
        color: "neutral.500",
        cursor: "not-allowed",
        boxShadow: "none",
      },
    },
  },
  compoundVariants: [
    {
      variant: "secondary",
      disabled: true,
      css: { backgroundColor: "neutral.100", color: "neutral.400" },
    },
    { variant: "outline", disabled: true, css: { backgroundColor: "white", color: "neutral.400" } },
    {
      variant: "subtle",
      disabled: true,
      css: { backgroundColor: "transparent", color: "neutral.400" },
    },
    {
      variant: "danger",
      disabled: true,
      css: { backgroundColor: "neutral.200", color: "neutral.500" },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonSectionClass = css({ display: "flex", alignItems: "center" });

export const buttonSpinnerClass = css({
  display: "inline-block",
  width: "1em",
  height: "1em",
  border: "2px solid currentColor",
  borderTopColor: "transparent",
  borderRadius: "full",
  animation: "spin 1s linear infinite",
});
