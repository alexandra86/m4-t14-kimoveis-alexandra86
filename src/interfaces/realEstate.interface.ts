import { Repository } from "typeorm";
import { z } from "zod";
import { RealEstate } from "../entities";
import {
  realEstateSchema,
  returnAllRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realEstate.schemas";

export type IRealEstate = z.infer<typeof realEstateSchema>;
export type IRealEstateReturn = z.infer<typeof returnRealEstateSchema>;
export type IAllRealEstateReturn = z.infer<typeof returnAllRealEstateSchema>;
export type IRealEstateRepo = Repository<RealEstate>;
