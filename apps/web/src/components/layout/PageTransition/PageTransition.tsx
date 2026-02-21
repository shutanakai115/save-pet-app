import type { ComponentType, PropsWithChildren, ReactNode } from "react";

import * as React from "react";

interface PageTransitionProps {
  children: ReactNode;
}

type ReactWithOptionalViewTransition = typeof React & {
  ViewTransition?: ComponentType<PropsWithChildren<{ name?: string; share?: string }>>;
  unstable_ViewTransition?: ComponentType<PropsWithChildren<{ name?: string; share?: string }>>;
};

const ViewTransitionComponent =
  (React as ReactWithOptionalViewTransition).ViewTransition ??
  (React as ReactWithOptionalViewTransition).unstable_ViewTransition;

export function PageTransition({ children }: PageTransitionProps) {
  if (!ViewTransitionComponent) {
    return;
    <>{children}</>;
  }
  return <ViewTransitionComponent>{children}</ViewTransitionComponent>;
}
