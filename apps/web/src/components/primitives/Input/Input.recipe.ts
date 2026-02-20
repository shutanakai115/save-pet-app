"use client";

import { css, cva } from "$styled-system/css";

export const inputFieldRootClass = css({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  width: "full",
});

export const inputLabelClass = css({
  fontSize: "sm",
  fontWeight: "medium",
  color: "fg.DEFAULT",
});

export const inputControlRecipe = cva({
  base: {
    width: "full",
    minH: "11",
    border: "1px solid",
    borderColor: "border.DEFAULT",
    borderRadius: "xl",
    backgroundColor: "white",
    color: "fg.DEFAULT",
    paddingX: 4,
    fontSize: "base",
    transition: "border-color 0.18s ease-in-out, box-shadow 0.18s ease-in-out",
    _placeholder: {
      color: "fg.subtle",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "primary.300",
      outlineOffset: "2px",
      borderColor: "primary.500",
    },
    _invalid: {
      borderColor: "error.500",
    },
  },
});

export const inputErrorClass = css({
  marginTop: 1,
  fontSize: "sm",
  color: "error.700",
});

export const inputDescriptionClass = css({
  marginTop: 1,
  fontSize: "sm",
  color: "fg.muted",
});
