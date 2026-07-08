import { desc, sql } from "drizzle-orm";
import { check, date, index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const goals = pgTable(
  "goals",
  {
    id: uuid("id").primaryKey(),
    userId: text("user_id").notNull().unique(),
    name: text("name").notNull(),
    category: text("category").notNull(),
    targetAmount: integer("target_amount").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [check("goals_target_amount_positive", sql`${table.targetAmount} > 0`)],
);

export const records = pgTable(
  "records",
  {
    id: uuid("id").primaryKey(),
    userId: text("user_id").notNull(),
    date: date("date").notNull(),
    description: text("description").notNull(),
    amount: integer("amount").notNull(),
    category: text("category").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    check("records_amount_positive", sql`${table.amount} > 0`),
    index("records_user_id_date_idx").on(table.userId, desc(table.date)),
  ],
);
