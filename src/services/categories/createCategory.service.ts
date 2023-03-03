import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  ICategory,
  ICategoryRepo,
  IReturnCategory,
} from "../../interfaces/categories.interfaces";
import { returnCategoriesSchema } from "../../schemas/categories.schema";

export const createCategoryService = async (
  categoryData: ICategory
): Promise<IReturnCategory> => {
  const categoryRepository: ICategoryRepo =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = returnCategoriesSchema.parse(category);

  return newCategory;
};
