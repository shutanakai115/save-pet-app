import type { ReactNode } from "react";

import { History, House, Settings, Target } from "lucide-react";

import { bottomNavigationListRecipe, bottomNavigationRootRecipe } from "./BottomNavigation.recipe";
import { BottomNavigationLink } from "./BottomNavigationLink";

export interface BottomNavigationItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface BottomNavigationProps {
  items?: BottomNavigationItem[];
  currentPath?: string;
}

const defaultItems: BottomNavigationItem[] = [
  { label: "ホーム", href: "/", icon: <House size={20} /> },
  { label: "履歴", href: "/history", icon: <History size={20} /> },
  { label: "目標", href: "/goal", icon: <Target size={20} /> },
  { label: "設定", href: "/settings", icon: <Settings size={20} /> },
];

export function BottomNavigation({ items = defaultItems, currentPath }: BottomNavigationProps) {
  return (
    <nav aria-label="Bottom navigation" className={bottomNavigationRootRecipe()}>
      <ul className={bottomNavigationListRecipe()}>
        {items.map((item) => (
          <li key={item.href}>
            <BottomNavigationLink
              href={item.href}
              icon={item.icon}
              label={item.label}
              currentPath={currentPath}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
