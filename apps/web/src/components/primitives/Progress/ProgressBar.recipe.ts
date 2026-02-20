"use client";

import { css } from "$styled-system/css";

export const progressRootClass = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 2,
  width: "full",
});

export const progressLabelClass = css({
  fontSize: "sm",
  color: "fg.muted",
  fontWeight: "medium",
});

export const progressTrackClass = css({
  gridColumn: "1 / -1",
  height: "2",
  borderRadius: "full",
  backgroundColor: "secondary.200",
  overflow: "hidden",
});

export const progressIndicatorClass = css({
  backgroundColor: "primary.500",
  height: "full",
  transition: "width 220ms ease-in-out",
});
