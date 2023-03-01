import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExistis.middleware";
import { userSchema } from "../schemas/users.schema";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailExistsMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);
