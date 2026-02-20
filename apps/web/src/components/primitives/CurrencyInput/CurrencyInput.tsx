"use client";

import type { ComponentProps } from "react";

import { cx } from "$styled-system/css";
import { Field } from "@base-ui/react/field";
import { Input as BaseInput } from "@base-ui/react/input";

import { currencyInputSlotRecipe } from "./CurrencyInput.recipe";

export interface CurrencyInputProps
  extends Omit<
    ComponentProps<typeof BaseInput>,
    | "className"
    | "value"
    | "onChange"
    | "onValueChange"
    | "type"
    | "inputMode"
    | "pattern"
    | "size"
  > {
  value: number | null;
  onValueChange: (value: number | null) => void;
  size?: "md" | "lg";
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  prefix?: string;
}

export function CurrencyInput({
  value,
  onValueChange,
  size = "md",
  label,
  description,
  errorMessage,
  className,
  prefix = "¥",
  required,
  autoComplete,
  autoCorrect,
  enterKeyHint,
  ...props
}: CurrencyInputProps) {
  const classes = currencyInputSlotRecipe({ size });
  const valueText = value == null ? "" : String(value);

  return (
    <Field.Root className={classes.fieldRoot}>
      {label && <Field.Label className={classes.label}>{label}</Field.Label>}

      <div className={classes.control}>
        <span className={classes.prefix} aria-hidden="true">
          {prefix}
        </span>
        <BaseInput
          required={required}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete={autoComplete ?? "off"}
          autoCorrect={autoCorrect ?? "off"}
          enterKeyHint={enterKeyHint ?? "done"}
          value={valueText}
          onChange={(event) => {
            const digitsOnly = event.target.value.replace(/[^0-9]/g, "");
            onValueChange(digitsOnly === "" ? null : Number(digitsOnly));
          }}
          className={cx(classes.input, className)}
          {...props}
        />
      </div>

      {errorMessage && (
        <Field.Error match={true} className={classes.error}>
          {errorMessage}
        </Field.Error>
      )}

      {description && !errorMessage && (
        <Field.Description className={classes.description}>{description}</Field.Description>
      )}
    </Field.Root>
  );
}
