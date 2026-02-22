import { createCollection } from "@tanstack/react-db";
import { localStorageCollectionOptions } from "@tanstack/react-db";

import type { SavingsCategory } from "@/app/(main)/_features/history";

export interface Goal {
  id: "current"; // 常に1件
  name: string;
  category: SavingsCategory;
  targetAmount: number;
}

export const goalCollection = createCollection(
  localStorageCollectionOptions<Goal>({
    id: "goal",
    storageKey: "saving-pet:goal",
    getKey: (item) => item.id,
    // Phase 2: 認証済みの場合に API へも書き込む
    // onInsert: async ({ transaction }) => { ... },
    // onUpdate: async ({ transaction }) => { ... },
    // onDelete: async ({ transaction }) => { ... },
  }),
);
