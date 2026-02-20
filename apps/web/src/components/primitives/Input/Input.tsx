"use client";

import type { ComponentProps } from "react";

import { cx } from "$styled-system/css";
import { Field } from "@base-ui/react/field";
import { Input as BaseInput } from "@base-ui/react/input";

import {
  inputControlRecipe,
  inputDescriptionRecipe,
  inputErrorRecipe,
  inputFieldRootRecipe,
  inputLabelRecipe,
} from "./Input.recipe";

export interface InputProps extends Omit<ComponentProps<typeof BaseInput>, "className"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function Input({
  label,
  description,
  errorMessage,
  className,
  required,
  ...props
}: InputProps) {
  return (
    <Field.Root className={inputFieldRootRecipe()}>
      {label && <Field.Label className={inputLabelRecipe()}>{label}</Field.Label>}

      <BaseInput required={required} className={cx(inputControlRecipe(), className)} {...props} />

      {errorMessage && (
        <Field.Error match={true} className={inputErrorRecipe()}>
          {errorMessage}
        </Field.Error>
      )}

      {description && !errorMessage && (
        <Field.Description className={inputDescriptionRecipe()}>{description}</Field.Description>
      )}
    </Field.Root>
  );
}
