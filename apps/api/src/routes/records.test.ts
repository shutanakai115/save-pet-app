import { Hono } from "hono";
import { beforeEach, describe, it, expect } from "vitest";

import { recordsApi } from "./records";

describe("recordsApi", () => {
  let app: Hono;

  beforeEach(() => {
    app = new Hono();
    app.route("/api/records", recordsApi);
  });

  it("正しい入力のとき 201 とレコードを返す", async () => {
    const response = await app.request("http://localhost/api/records", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        date: "2026-07-09",
        description: "coffee",
        amount: 500,
        category: "cafe",
      }),
    });

    const body = (await response.json()) as {
      userId: string;
      record: {
        date: string;
        description: string;
        amount: number;
        category: string;
      };
    };

    expect(response.status).toBe(201);
    expect(body.userId).toBe("dev-user-1");
    expect(body.record).toEqual({
      date: "2026-07-09",
      description: "coffee",
      amount: 500,
      category: "cafe",
    });
  });

  it("不正な category のとき 400 を返す", async () => {
    const response = await app.request("http://localhost/api/records", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        date: "2026-07-09",
        description: "coffee",
        amount: 500,
        category: "invalid-category",
      }),
    });

    expect(response.status).toBe(400);
  });
});