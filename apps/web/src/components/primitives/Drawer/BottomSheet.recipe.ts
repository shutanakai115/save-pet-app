"use client";

import { css } from "$styled-system/css";

export const bottomSheetBackdropClass = css({
  position: "fixed",
  inset: 0,
  minH: "dvh",
  backgroundColor: "black",
  opacity: 0.35,
  transition: "opacity 160ms ease-in-out",
  "&[data-starting-style], &[data-ending-style]": { opacity: 0 },
});

export const bottomSheetViewportClass = css({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

export const bottomSheetPopupClass = css({
  width: "full",
  maxW: "md",
  maxH: "80vh",
  borderTopLeftRadius: "3xl",
  borderTopRightRadius: "3xl",
  backgroundColor: "white",
  border: "1px solid",
  borderColor: "border.DEFAULT",
  paddingX: 5,
  paddingTop: 4,
  paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
  overflowY: "auto",
  transform: "translateY(var(--drawer-swipe-movement-y))",
  transition: "transform 220ms ease-in-out",
  "&[data-starting-style], &[data-ending-style]": {
    transform: "translateY(100%)",
  },
});

export const bottomSheetHandleClass = css({
  width: "12",
  height: "1",
  borderRadius: "full",
  backgroundColor: "neutral.300",
  marginX: "auto",
  marginBottom: 4,
});

export const bottomSheetTitleClass = css({
  fontSize: "xl",
  fontWeight: "bold",
  textAlign: "center",
  color: "fg.DEFAULT",
  marginBottom: 1,
});

export const bottomSheetDescriptionClass = css({
  fontSize: "sm",
  color: "fg.muted",
  textAlign: "center",
  marginBottom: 4,
});
