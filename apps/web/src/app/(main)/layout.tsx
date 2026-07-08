import type { ReactNode } from "react";

import { AppShell, BottomNavigation, PageContainer, PageTransition } from "@/components/layout";

import { SavingsDataProvider } from "./_layout";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppShell>
      <SavingsDataProvider>
        <PageContainer>
          <PageTransition>{children}</PageTransition>
        </PageContainer>
        <BottomNavigation />
      </SavingsDataProvider>
    </AppShell>
  );
}
