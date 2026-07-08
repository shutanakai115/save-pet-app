import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { recordsApi } from "./routes/records";
import { goalsApi } from "./routes/goals";

const app = new Hono();

app.use("*", cors());

app.get("/health", (c) =>
  c.json({
    status: "ok",
    message: "API server is running",
  }),
);

app.route("/api/records", recordsApi);
app.route("/api/goals", goalsApi);

const port = Number(process.env.PORT ?? 8080);

serve({ fetch: app.fetch, port });

console.log(`API server is running on port ${port}`);
