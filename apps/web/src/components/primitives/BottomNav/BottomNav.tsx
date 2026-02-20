import type { ReactNode } from "react";

import { History, House, Settings, Target } from "lucide-react";
import { bottomNavListRecipe, bottomNavRootRecipe } from "./BottomNav.recipe";
import { BottomNavLink } from "./BottomNavLink";

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
  { label: "ホーム", href: "/", icon: <House size={20} /> },
  { label: "履歴", href: "/history", icon: <History size={20} /> },
  { label: "目標", href: "/goal", icon: <Target size={20} /> },
  { label: "設定", href: "/settings", icon: <Settings size={20} /> },
];

export function BottomNav({ items = defaultItems, currentPath }: BottomNavProps) {
  return (
    <nav aria-label="Bottom navigation" className={bottomNavRootRecipe()}>
      <ul className={bottomNavListRecipe()}>
        {items.map((item) => (
          <li key={item.href}>
            <BottomNavLink href={item.href} icon={item.icon} label={item.label} currentPath={currentPath} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
