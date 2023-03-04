import { z } from "zod";

export const categoriesSchema = z.object({
  name: z.string().min(3).max(45),
});

export const returnCategoriesSchema = categoriesSchema.extend({
  id: z.number(),
});

export const returnAllCategoriesSchema = returnCategoriesSchema.array();
