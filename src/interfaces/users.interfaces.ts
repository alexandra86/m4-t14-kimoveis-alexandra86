import { Repository } from "typeorm";
import { z } from "zod";
import { User } from "../entities";
import {
  returnAllUserSchema,
  returnUserSchema,
  userSchema,
} from "../schemas/users.schema";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
export type IAllUsersReturn = z.infer<typeof returnAllUserSchema>;
export type iUserRepo = Repository<User>;
