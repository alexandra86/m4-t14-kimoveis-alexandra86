import { Router } from "express";
import { categoriesSchema } from "../schemas/categories.schema";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureNameCategoryExistsMiddleware } from "../middlewares/ensureNameCategoryExists.middleware";
import { ensureIsAdminValidMiddleware } from "../middlewares/ensureIsAdminValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
  createCategoryController,
  listCategoriesController,
} from "../controllers/categories.controllers";

export const categoryRoutes: Router = Router();

categoryRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminValidMiddleware,
  ensureDataIsValidMiddleware(categoriesSchema),
  ensureNameCategoryExistsMiddleware,
  createCategoryController
);

categoryRoutes.get("", listCategoriesController);
