import { forwardRef } from "react";
import { css, cx } from "$styled-system/css";
import { type HTMLStyledProps, styled } from "$styled-system/jsx";

// Button variant styles
const buttonVariants = {
  primary: {
    backgroundColor: "primary.500",
    color: "white",
    borderColor: "primary.500",
    _hover: {
      backgroundColor: "primary.600",
      borderColor: "primary.600",
    },
    _active: {
      backgroundColor: "primary.700",
      borderColor: "primary.700",
    },
    _disabled: {
      backgroundColor: "secondary.300",
      borderColor: "secondary.300",
      color: "secondary.500",
      cursor: "not-allowed",
    },
  },
  secondary: {
    backgroundColor: "white",
    color: "primary.600",
    borderColor: "primary.500",
    _hover: {
      backgroundColor: "primary.50",
      borderColor: "primary.600",
    },
    _active: {
      backgroundColor: "primary.100",
      borderColor: "primary.700",
    },
    _disabled: {
      backgroundColor: "secondary.50",
      borderColor: "secondary.300",
      color: "secondary.400",
      cursor: "not-allowed",
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: "primary.600",
    borderColor: "primary.500",
    _hover: {
      backgroundColor: "primary.50",
      borderColor: "primary.600",
    },
    _active: {
      backgroundColor: "primary.100",
      borderColor: "primary.700",
    },
    _disabled: {
      backgroundColor: "transparent",
      borderColor: "secondary.300",
      color: "secondary.400",
      cursor: "not-allowed",
    },
  },
  subtle: {
    backgroundColor: "transparent",
    color: "primary.600",
    borderColor: "transparent",
    _hover: {
      backgroundColor: "primary.50",
    },
    _active: {
      backgroundColor: "primary.100",
    },
    _disabled: {
      backgroundColor: "transparent",
      color: "secondary.400",
      cursor: "not-allowed",
    },
  },
  danger: {
    backgroundColor: "error.500",
    color: "white",
    borderColor: "error.500",
    _hover: {
      backgroundColor: "error.600",
      borderColor: "error.600",
    },
    _active: {
      backgroundColor: "error.700",
      borderColor: "error.700",
    },
    _disabled: {
      backgroundColor: "secondary.300",
      borderColor: "secondary.300",
      color: "secondary.500",
      cursor: "not-allowed",
    },
  },
};

// Button size styles
const buttonSizes = {
  xs: {
    paddingX: 2, // 8px
    fontSize: "xs",
    fontWeight: "medium",
  },
  sm: {
    paddingX: 3, // 12px
    fontSize: "sm",
    fontWeight: "medium",
  },
  md: {
    paddingX: 4, // 16px
    fontSize: "sm",
    fontWeight: "medium",
  },
  lg: {
    paddingX: 6, // 24px
    fontSize: "base",
    fontWeight: "medium",
  },
  xl: {
    paddingX: 8, // 32px
    fontSize: "lg",
    fontWeight: "medium",
  },
};

// Base button styles
const baseButtonStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  borderRadius: "md",
  fontFamily: "sans",
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  gap: 2, // 8px gap between icon and text

  _focus: {
    outline: "2px solid",
    outlineColor: "primary.500",
    outlineOffset: "2px",
  },

  _focusVisible: {
    outline: "2px solid",
    outlineColor: "primary.500",
    outlineOffset: "2px",
  },
};

export interface ButtonProps extends HTMLStyledProps<"button"> {
  /** Button variant */
  variant?: keyof typeof buttonVariants;
  /** Button size */
  size?: keyof typeof buttonSizes;
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Left section content */
  leftSection?: React.ReactNode;
  /** Right section content */
  rightSection?: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Children content */
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      leftSection,
      rightSection,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const buttonClass = css({
      ...baseButtonStyles,
      ...buttonSizes[size],
      ...buttonVariants[variant],
      ...(fullWidth && { width: "full" }),
      ...(loading && {
        cursor: "not-allowed",
        opacity: 0.6,
      }),
    });

    return (
      <styled.button
        ref={ref}
        className={cx(buttonClass, className)}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <span
            className={css({
              display: "inline-block",
              width: "1em",
              height: "1em",
              border: "2px solid currentColor",
              borderTopColor: "transparent",
              borderRadius: "full",
              animation: "spin 1s linear infinite",
            })}
          />
        )}
        {!loading && leftSection && (
          <span className={css({ display: "flex", alignItems: "center" })}>{leftSection}</span>
        )}
        {children && (
          <span className={css({ display: "flex", alignItems: "center" })}>{children}</span>
        )}
        {!loading && rightSection && (
          <span className={css({ display: "flex", alignItems: "center" })}>{rightSection}</span>
        )}
      </styled.button>
    );
  },
);

Button.displayName = "Button";
