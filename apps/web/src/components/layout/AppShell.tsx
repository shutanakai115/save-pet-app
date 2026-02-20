import type { ReactNode } from "react";

import { cx } from "$styled-system/css";
import { styled } from "$styled-system/jsx";

import { appShellBodyRecipe, appShellRootRecipe } from "./AppShell.recipe";

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <styled.div className={cx(appShellRootRecipe(), className)}>
      <styled.div className={appShellBodyRecipe()}>{children}</styled.div>
    </styled.div>
  );
}
