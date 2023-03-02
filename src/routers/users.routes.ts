import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExistis.middleware";
import { ensureIsAdminValidMiddleware } from "../middlewares/ensureIsAdminValid.middleware";
import { ensureLoggedInUserValidatMiddleware } from "../middlewares/ensureLoggedInUserValidat.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schema";

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
usersRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureLoggedInUserValidatMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);
