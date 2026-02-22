"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  bottomNavigationIconWrapRecipe,
  bottomNavigationLabelRecipe,
  bottomNavigationLinkRecipe,
} from "./BottomNavigationLink.recipe";

interface BottomNavigationLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  currentPath?: string;
}

export function BottomNavigationLink({
  href,
  icon,
  label,
  currentPath,
}: BottomNavigationLinkProps) {
  const pathname = usePathname();
  const activePath = currentPath ?? pathname ?? "/";
  const active = href === "/" ? activePath === "/" : activePath.startsWith(href);

  return (
    <Link
      href={href}
      className={bottomNavigationLinkRecipe({ active })}
      aria-current={active ? "page" : undefined}
    >
      <span className={bottomNavigationIconWrapRecipe({ active })} aria-hidden="true">
        {icon}
      </span>
      <span className={bottomNavigationLabelRecipe()}>{label}</span>
    </Link>
  );
}
