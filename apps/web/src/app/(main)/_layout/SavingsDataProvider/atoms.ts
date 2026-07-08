import { atom } from "jotai";

import type { Goal, SavingsRecord } from "@/lib/db";

// 基本 atom
export const recordsAtom = atom<SavingsRecord[]>([]);
export const goalAtom = atom<Goal | undefined>(undefined);
export const isReadyAtom = atom<boolean>(false);

// 派生 atom: records が変わった時だけ再計算
export const totalAmountAtom = atom((get) =>
  get(recordsAtom).reduce((sum, r) => sum + (Number(r.amount) || 0), 0),
);

// 派生 atom: 日付降順ソート済みの先頭3件
export const recentRecordsAtom = atom((get) => get(recordsAtom).slice(0, 3));
