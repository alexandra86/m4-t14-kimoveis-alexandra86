import {
  categoriesSchema,
  returnAllCategoriesSchema,
  returnCategoriesSchema,
} from "../schemas/categories.schema";
import { z } from "zod";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type ICategory = z.infer<typeof categoriesSchema>;
export type IReturnCategory = z.infer<typeof returnCategoriesSchema>;
export type IReturnAllCategories = z.infer<typeof returnAllCategoriesSchema>;
export type ICategoryRepo = Repository<Category>;
