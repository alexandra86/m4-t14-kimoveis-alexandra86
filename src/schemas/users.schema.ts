import { z } from "zod";

export const userSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional().default(false),
  password: z.string().max(120),
});

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

export const returnAllUserSchema = returnUserSchema.array();

export const updateUserSchema = userSchema.partial().omit({
  admin: true,
});
