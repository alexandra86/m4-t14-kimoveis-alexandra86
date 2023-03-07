import { Router } from "express";
import {
  createScheduleController,
  listScheduleByRealEstateController,
} from "../controllers/schedule.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminValidMiddleware } from "../middlewares/ensureIsAdminValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { createScheduleSchema } from "../schemas/schedule.schema";

export const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddleware,
  ensureDataIsValidMiddleware(createScheduleSchema),
  createScheduleController
);

scheduleRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAdminValidMiddleware,
  listScheduleByRealEstateController
);
