import { Hono } from "hono";
import { getCurrentUserId } from "../auth/current-user";
import { createRecordSchema } from "@saving-pet/schemas";
import { vValidator } from "@hono/valibot-validator";

export const recordsApi = new Hono();

recordsApi.get("/", (c) => {
  const userId = getCurrentUserId();
  return c.json({ message: `Hello, ${userId}! Records!` });
});

recordsApi.post("/", vValidator("json", createRecordSchema), async (c) => {
  const userId = getCurrentUserId();
  const input = await c.req.valid("json");
  return c.json({
    userId,
    record: input,
  }, 201);
});