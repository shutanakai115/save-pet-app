"use client";

import { css } from "$styled-system/css";

export const circularProgressRootClass = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const circularProgressContentClass = css({
  position: "absolute",
  textAlign: "center",
  color: "fg.DEFAULT",
});

export const circularProgressPercentClass = css({
  fontSize: "2xl",
  fontWeight: "bold",
  color: "primary.700",
});

export const circularProgressCaptionClass = css({
  fontSize: "sm",
  color: "fg.muted",
});
