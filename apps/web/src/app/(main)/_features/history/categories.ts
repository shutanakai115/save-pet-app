import {
  Coffee,
  CircleEllipsis,
  type LucideIcon,
  ShoppingCart,
  Store,
  UtensilsCrossed,
} from "lucide-react";

export type SavingsCategory = "convenience" | "cafe" | "online" | "dining" | "other";

export interface SavingsCategoryOption {
  value: SavingsCategory;
  label: string;
}

export const SAVINGS_CATEGORY_OPTIONS: SavingsCategoryOption[] = [
  { label: "コンビニ", value: "convenience" },
  { label: "カフェ", value: "cafe" },
  { label: "ネット通販", value: "online" },
  { label: "外食", value: "dining" },
  { label: "その他", value: "other" },
];

export const CATEGORY_ICON_MAP: Record<SavingsCategory, LucideIcon> = {
  convenience: Store,
  cafe: Coffee,
  online: ShoppingCart,
  dining: UtensilsCrossed,
  other: CircleEllipsis,
};
