import type { SavingsCategory } from "./categories";

export interface SavingsRecord {
  id: string;
  date: string; // ISO date: YYYY-MM-DD
  description: string;
  amount: number;
  category: SavingsCategory;
}
