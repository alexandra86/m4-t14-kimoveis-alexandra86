import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate.controllers";
import { ensureAddressExistsMiddleware } from "../middlewares/ensureAddressExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdminValidMiddleware } from "../middlewares/ensureIsAdminValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { realEstateSchema } from "../schemas/realEstate.schemas";

export const RealEstateRoutes: Router = Router();

RealEstateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminValidMiddleware,
  ensureDataIsValidMiddleware(realEstateSchema),
  ensureAddressExistsMiddleware,
  createRealEstateController
);
