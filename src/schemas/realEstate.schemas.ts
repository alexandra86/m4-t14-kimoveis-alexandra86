import { z } from "zod";
import { addressSchema } from "./address.schema";

export const realEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: addressSchema,
  categoryId: z.number(),
});

export const returnRealEstateSchema = realEstateSchema.extend({
  id: z.number(),
  sold: z.boolean().optional().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const returnAllRealEstateSchema = returnRealEstateSchema.array();
