import { z } from "zod";
import { addressSchema, returnAddressSchema } from "./address.schema";
import { returnCategoriesSchema } from "./categories.schema";

export const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: addressSchema,
  categoryId: z.number(),
});

export const returnRealEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().optional().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: returnAddressSchema,
  category: returnCategoriesSchema,
});

export const returnAllRealEstateSchema = returnRealEstateSchema
  .partial()
  .array();
