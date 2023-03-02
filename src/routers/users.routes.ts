import { Router } from "express";
import {
  createUserController,
  listUsersController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExistis.middleware";
import { ensureIsAdminValidMiddleware } from "../middlewares/ensureIsAdminValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { userSchema } from "../schemas/users.schema";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailExistsMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminValidMiddleware,
  listUsersController
);
