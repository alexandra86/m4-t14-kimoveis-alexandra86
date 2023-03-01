import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional().default(false),
  password: z
    .string()
    .max(120)
    .transform((password) => {
      return hashSync(password, 10);
    }),
});

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
  })
  .omit({ password: true });

export const returnAllUserSchema = returnUserSchema.array();
