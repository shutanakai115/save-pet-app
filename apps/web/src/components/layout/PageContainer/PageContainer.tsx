import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cx } from "$styled-system/css";
import { styled } from "$styled-system/jsx";

import { pageContainerRecipe } from "./PageContainer.recipe";

interface PageContainerProps extends ComponentPropsWithoutRef<"main"> {
  children: ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <styled.main className={cx(pageContainerRecipe(), className)} {...props}>
      {children}
    </styled.main>
  );
}
