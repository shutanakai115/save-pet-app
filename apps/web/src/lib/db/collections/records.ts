import { createCollection } from "@tanstack/react-db";
import { localStorageCollectionOptions } from "@tanstack/react-db";

import type { SavingsRecord } from "@/app/(main)/_features/history";

export type { SavingsRecord };

export const savingsRecordsCollection = createCollection(
  localStorageCollectionOptions<SavingsRecord>({
    id: "savings-records",
    storageKey: "saving-pet:records",
    getKey: (item) => item.id,
    // Phase 2: 認証済みの場合に API へも書き込む
    // onInsert: async ({ transaction }) => { ... },
    // onUpdate: async ({ transaction }) => { ... },
    // onDelete: async ({ transaction }) => { ... },
  }),
);
