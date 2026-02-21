import type { ReactNode } from "react";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import {
  subPageHeaderBackButtonRecipe,
  subPageHeaderRecipe,
  subPageHeaderTitleRecipe,
  subPageOverlayRecipe,
  subPageRootRecipe,
} from "./SubPageLayout.recipe";

interface SubPageLayoutProps {
  title: string;
  backHref?: string;
  children: ReactNode;
}

export function SubPageLayout({ title, backHref = "/", children }: SubPageLayoutProps) {
  return (
    <div className={subPageRootRecipe()}>
      <div className={subPageOverlayRecipe()}>
        <header className={subPageHeaderRecipe()}>
          <Link
            href={backHref}
            aria-label="前のページに戻る"
            className={subPageHeaderBackButtonRecipe()}
          >
            <ChevronLeft size={18} />
          </Link>
          <h1 className={subPageHeaderTitleRecipe()}>{title}</h1>
        </header>
        {children}
      </div>
    </div>
  );
}
