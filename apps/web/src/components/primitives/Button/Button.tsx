"use client";

import { cx } from "$styled-system/css";
import { type HTMLStyledProps, styled } from "$styled-system/jsx";
import Link from "next/link";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

import { buttonRecipe, buttonSectionRecipe, buttonSpinnerRecipe } from "./Button.recipe";

export interface ButtonProps extends HTMLStyledProps<"button"> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "subtle" | "danger" | "cta";
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
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

export interface LinkButtonProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "subtle" | "danger" | "cta";
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
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

    return (
      <styled.button
        ref={ref}
        className={cx(
          buttonRecipe({
            variant,
            size,
            fullWidth,
            loading,
            disabled: isDisabled,
          }),
          className,
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && <span className={buttonSpinnerRecipe()} />}
        {!loading && leftSection && <span className={buttonSectionRecipe()}>{leftSection}</span>}
        {children && <span className={buttonSectionRecipe()}>{children}</span>}
        {!loading && rightSection && <span className={buttonSectionRecipe()}>{rightSection}</span>}
      </styled.button>
    );
  },
);

Button.displayName = "Button";

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftSection,
  rightSection,
  className,
  children,
  tabIndex,
  "aria-disabled": ariaDisabled,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cx(
        buttonRecipe({
          variant,
          size,
          fullWidth,
          loading,
          disabled: loading,
        }),
        className,
      )}
      aria-disabled={ariaDisabled ?? loading}
      tabIndex={loading ? -1 : tabIndex}
      {...props}
    >
      {loading && <span className={buttonSpinnerRecipe()} />}
      {!loading && leftSection && <span className={buttonSectionRecipe()}>{leftSection}</span>}
      {children && <span className={buttonSectionRecipe()}>{children}</span>}
      {!loading && rightSection && <span className={buttonSectionRecipe()}>{rightSection}</span>}
    </Link>
  );
}
