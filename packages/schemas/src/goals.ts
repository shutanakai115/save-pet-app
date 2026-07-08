import * as v from "valibot";

import { savingsCategorySchema } from "./records";

export const putGoalSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(1), v.maxLength(120)),
  category: savingsCategorySchema,
  targetAmount: v.pipe(v.number(), v.integer(), v.minValue(1)),
});

export type PutGoalInput = v.InferOutput<typeof putGoalSchema>;
