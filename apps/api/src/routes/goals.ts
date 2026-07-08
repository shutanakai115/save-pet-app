import { Hono } from "hono";
import { getCurrentUserId } from "../auth/current-user";

export const goalsApi = new Hono();

goalsApi.get("/", (c) => {
    const userId = getCurrentUserId();
  return c.json({ message: `Hello, ${userId}! Goals!` });
});