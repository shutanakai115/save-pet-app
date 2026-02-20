"use client";

import { css } from "$styled-system/css";

export const selectFieldRootClass = css({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  width: "full",
});

export const selectLabelClass = css({
  fontSize: "sm",
  fontWeight: "medium",
  color: "fg.DEFAULT",
});

export const selectTriggerClass = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "full",
  minH: "11",
  paddingX: 4,
  border: "1px solid",
  borderColor: "border.DEFAULT",
  borderRadius: "xl",
  backgroundColor: "white",
  color: "fg.DEFAULT",
  cursor: "pointer",
  transition: "border-color 0.18s ease-in-out",
  _hover: {
    borderColor: "secondary.400",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "primary.300",
    outlineOffset: "2px",
    borderColor: "primary.500",
  },
});

export const selectValueClass = css({
  textAlign: "left",
  "&[data-placeholder]": {
    color: "fg.subtle",
  },
});

export const selectIconClass = css({ display: "inline-flex", color: "fg.muted" });

export const selectPositionerClass = css({ zIndex: "popover" });

export const selectPopupClass = css({
  minWidth: "var(--anchor-width)",
  borderRadius: "xl",
  backgroundColor: "white",
  border: "1px solid",
  borderColor: "border.DEFAULT",
  boxShadow: "lg",
  overflow: "hidden",
  maxH: "72",
  "&[data-starting-style]": {
    opacity: 0,
    transform: "scale(0.98)",
  },
  "&[data-ending-style]": {
    opacity: 0,
    transform: "scale(0.98)",
  },
});

export const selectListClass = css({ paddingY: 1 });

export const selectItemClass = css({
  display: "grid",
  gridTemplateColumns: "12px 1fr",
  alignItems: "center",
  gap: 2,
  paddingY: 2,
  paddingX: 3,
  color: "fg.DEFAULT",
  cursor: "pointer",
  _highlighted: {
    backgroundColor: "secondary.100",
  },
});

export const selectItemIndicatorClass = css({ color: "primary.700" });
