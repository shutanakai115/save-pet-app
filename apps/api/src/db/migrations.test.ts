/**
 * マイグレーション後の DB スキーマ統合テスト。
 *
 * category の妥当性（convenience / cafe / online / dining / other）は API 層（Valibot）で検証する。
 * DB 層は text として任意の文字列を許容する設計のため、このテストでは制約・型のみを検証する。
 */
import { randomUUID } from "node:crypto";

import { Pool } from "pg";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

const DATABASE_URL = process.env.DATABASE_URL;

interface ColumnRow {
  column_name: string;
  data_type: string;
  udt_name: string;
  is_nullable: string;
  column_default: string | null;
}

interface ConstraintRow {
  conname: string;
  contype: string;
  definition: string;
}

let pool: Pool;

function requireDatabaseUrl(): string {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is required. Run migrations before tests.");
  }
  return DATABASE_URL;
}

async function getColumns(tableName: string): Promise<ColumnRow[]> {
  const result = await pool.query<ColumnRow>(
    `
      SELECT column_name, data_type, udt_name, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
      ORDER BY ordinal_position
    `,
    [tableName],
  );
  return result.rows;
}

async function getConstraints(tableName: string): Promise<ConstraintRow[]> {
  const result = await pool.query<ConstraintRow>(
    `
      SELECT c.conname, c.contype::text, pg_get_constraintdef(c.oid) AS definition
      FROM pg_constraint c
      JOIN pg_class t ON c.conrelid = t.oid
      JOIN pg_namespace n ON t.relnamespace = n.oid
      WHERE n.nspname = 'public' AND t.relname = $1
    `,
    [tableName],
  );
  return result.rows;
}

function findColumn(columns: ColumnRow[], name: string): ColumnRow {
  const column = columns.find((row) => row.column_name === name);
  if (!column) {
    throw new Error(`Column not found: ${name}`);
  }
  return column;
}

beforeAll(() => {
  pool = new Pool({ connectionString: requireDatabaseUrl() });
});

afterAll(async () => {
  await pool.end();
});

describe("マイグレーション後のスキーマ", () => {
  it("goals と records テーブルが存在する", async () => {
    const result = await pool.query<{ table_name: string }>(
      `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = ANY($1::text[])
        ORDER BY table_name
      `,
      [["goals", "records"]],
    );

    expect(result.rows.map((row) => row.table_name)).toEqual(["goals", "records"]);
  });
});

describe("goals テーブル", () => {
  it("必須カラムと型が定義どおりである", async () => {
    const columns = await getColumns("goals");

    expect(findColumn(columns, "id")).toMatchObject({
      udt_name: "uuid",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "user_id")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "name")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "category")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "target_amount")).toMatchObject({
      data_type: "integer",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "created_at")).toMatchObject({
      data_type: "timestamp with time zone",
      is_nullable: "NO",
      column_default: expect.stringContaining("now()"),
    });
    expect(findColumn(columns, "updated_at")).toMatchObject({
      data_type: "timestamp with time zone",
      is_nullable: "NO",
      column_default: expect.stringContaining("now()"),
    });
  });

  it("user_id の UNIQUE 制約がある", async () => {
    const constraints = await getConstraints("goals");
    const uniqueConstraint = constraints.find(
      (row) => row.contype === "u" && row.definition.includes("user_id"),
    );

    expect(uniqueConstraint).toBeDefined();
  });

  it("target_amount > 0 の CHECK 制約がある", async () => {
    const constraints = await getConstraints("goals");
    const checkConstraint = constraints.find(
      (row) => row.conname === "goals_target_amount_positive",
    );

    expect(checkConstraint?.contype).toBe("c");
    expect(checkConstraint?.definition).toMatch(/target_amount\s*>\s*0/i);
  });

  it("同一 user_id の2件目 INSERT を拒否する", async () => {
    const client = await pool.connect();
    const userId = `user-unique-${randomUUID()}`;
    try {
      await client.query("BEGIN");
      await client.query(
        `
          INSERT INTO goals (id, user_id, name, category, target_amount)
          VALUES ($1, $2, $3, $4, $5)
        `,
        [randomUUID(), userId, "目標1", "other", 1000],
      );
      await expect(
        client.query(
          `
            INSERT INTO goals (id, user_id, name, category, target_amount)
            VALUES ($1, $2, $3, $4, $5)
          `,
          [randomUUID(), userId, "目標2", "other", 2000],
        ),
      ).rejects.toThrow(/goals_user_id_unique/);
    } finally {
      await client.query("ROLLBACK");
      client.release();
    }
  });

  it("target_amount が 0 以下の INSERT を拒否する", async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await expect(
        client.query(
          `
            INSERT INTO goals (id, user_id, name, category, target_amount)
            VALUES ($1, $2, $3, $4, $5)
          `,
          [randomUUID(), "user-check", "目標", "other", 0],
        ),
      ).rejects.toThrow(/goals_target_amount_positive/);
    } finally {
      await client.query("ROLLBACK");
      client.release();
    }
  });
});

describe("records テーブル", () => {
  it("必須カラムと型が定義どおりである", async () => {
    const columns = await getColumns("records");

    expect(findColumn(columns, "id")).toMatchObject({
      udt_name: "uuid",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "user_id")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "date")).toMatchObject({
      data_type: "date",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "description")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "amount")).toMatchObject({
      data_type: "integer",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "category")).toMatchObject({
      data_type: "text",
      is_nullable: "NO",
    });
    expect(findColumn(columns, "created_at")).toMatchObject({
      data_type: "timestamp with time zone",
      is_nullable: "NO",
      column_default: expect.stringContaining("now()"),
    });
    expect(findColumn(columns, "updated_at")).toMatchObject({
      data_type: "timestamp with time zone",
      is_nullable: "NO",
      column_default: expect.stringContaining("now()"),
    });
  });

  it("amount > 0 の CHECK 制約がある", async () => {
    const constraints = await getConstraints("records");
    const checkConstraint = constraints.find((row) => row.conname === "records_amount_positive");

    expect(checkConstraint?.contype).toBe("c");
    expect(checkConstraint?.definition).toMatch(/amount\s*>\s*0/i);
  });

  it("amount が 0 以下の INSERT を拒否する", async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await expect(
        client.query(
          `
            INSERT INTO records (id, user_id, date, description, amount, category)
            VALUES ($1, $2, $3, $4, $5, $6)
          `,
          [randomUUID(), "user-check", "2026-07-08", "テスト", 0, "other"],
        ),
      ).rejects.toThrow(/records_amount_positive/);
    } finally {
      await client.query("ROLLBACK");
      client.release();
    }
  });

  it("user_id と date の降順インデックスがある", async () => {
    const result = await pool.query<{ indexname: string; indexdef: string }>(
      `
        SELECT indexname, indexdef
        FROM pg_indexes
        WHERE schemaname = 'public'
          AND tablename = 'records'
          AND indexname = 'records_user_id_date_idx'
      `,
    );

    expect(result.rows).toHaveLength(1);
    expect(result.rows[0]?.indexdef).toMatch(/user_id/i);
    expect(result.rows[0]?.indexdef).toMatch(/date/i);
    expect(result.rows[0]?.indexdef).toMatch(/desc/i);
  });
});
