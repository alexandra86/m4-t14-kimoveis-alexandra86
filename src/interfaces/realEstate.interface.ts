import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../entities";
import {
  createRealEstateSchema,
  returnAllRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realEstate.schemas";

export type ICreateRealEstate = z.infer<typeof createRealEstateSchema>;
export type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>;
export type IAllRealEstateReturn = z.infer<typeof returnAllRealEstateSchema>;
export type IRealEstateRepo = Repository<RealEstate>;
