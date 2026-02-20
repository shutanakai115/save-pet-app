"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  bottomNavIconWrapRecipe,
  bottomNavLabelRecipe,
  bottomNavLinkRecipe,
} from "./BottomNav.recipe";

interface BottomNavLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  currentPath?: string;
}

export function BottomNavLink({ href, icon, label, currentPath }: BottomNavLinkProps) {
  const pathname = usePathname();
  const activePath = currentPath ?? pathname ?? "/";
  const active = href === "/" ? activePath === "/" : activePath.startsWith(href);

  return (
    <Link href={href} className={bottomNavLinkRecipe({ active })} aria-current={active ? "page" : undefined}>
      <span className={bottomNavIconWrapRecipe({ active })} aria-hidden="true">
        {icon}
      </span>
      <span className={bottomNavLabelRecipe()}>{label}</span>
    </Link>
  );
}
