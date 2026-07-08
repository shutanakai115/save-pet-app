import * as v from "valibot";

export const savingsCategoryValues = [
  "convenience",
  "cafe",
  "online",
  "dining",
  "other",
] as const;

export const savingsCategorySchema = v.picklist(savingsCategoryValues);

export const recordIdParamSchema = v.object({
  id: v.pipe(v.string(), v.uuid()),
});

export const createRecordSchema = v.object({
  date: v.pipe(v.string(), v.regex(/^\d{4}-\d{2}-\d{2}$/)),
  description: v.pipe(v.string(), v.trim(), v.minLength(1), v.maxLength(120)),
  amount: v.pipe(v.number(), v.integer(), v.minValue(1)),
  category: savingsCategorySchema,
});

export const updateRecordSchema = createRecordSchema;

export type SavingsCategory = v.InferOutput<typeof savingsCategorySchema>;
export type CreateRecordInput = v.InferOutput<typeof createRecordSchema>;
export type UpdateRecordInput = v.InferOutput<typeof updateRecordSchema>;
