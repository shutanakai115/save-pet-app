import type { ReactNode } from "react";

import { AppShell, BottomNavigation, PageContainer, PageTransition } from "@/components/layout";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppShell>
      <PageContainer>
        <PageTransition>{children}</PageTransition>
      </PageContainer>
      <BottomNavigation />
    </AppShell>
  );
}
