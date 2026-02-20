"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { bottomNavLinkRecipe, bottomNavListClass, bottomNavRootClass } from "./BottomNav.recipe";

export interface BottomNavItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface BottomNavProps {
  items?: BottomNavItem[];
  currentPath?: string;
}

const defaultItems: BottomNavItem[] = [
  { label: "ホーム", href: "/", icon: "🏠" },
  { label: "履歴", href: "/history", icon: "🧾" },
  { label: "目標", href: "/goal", icon: "🎯" },
  { label: "設定", href: "/settings", icon: "⚙️" },
];

export function BottomNav({ items = defaultItems, currentPath }: BottomNavProps) {
  const pathname = usePathname();
  const activePath = currentPath ?? pathname ?? "/";

  return (
    <nav aria-label="Bottom navigation" className={bottomNavRootClass}>
      <ul className={bottomNavListClass}>
        {items.map((item) => {
          const active = item.href === "/" ? activePath === "/" : activePath.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={bottomNavLinkRecipe({ active })}
                aria-current={active ? "page" : undefined}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
