"use client";

import type { ComponentType, PropsWithChildren, ReactNode } from "react";
import * as React from "react";

interface PageTransitionProps {
  children: ReactNode;
}

type ReactWithViewTransition = typeof React & {
  ViewTransition?: ComponentType<PropsWithChildren>;
};

const ViewTransitionComponent = (React as ReactWithViewTransition).ViewTransition;

export function PageTransition({ children }: PageTransitionProps) {
  if (!ViewTransitionComponent) {
    return <>{children}</>;
  }

  return <ViewTransitionComponent>{children}</ViewTransitionComponent>;
}
