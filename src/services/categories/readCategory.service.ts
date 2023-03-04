import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategoryRepo } from "../../interfaces/categories.interfaces";
import { IReturnAllCategories } from "../../interfaces/categories.interfaces";
import { returnAllCategoriesSchema } from "../../schemas/categories.schema";

export const listCategoriesService =
  async (): Promise<IReturnAllCategories> => {
    const categoryRepository: ICategoryRepo =
      AppDataSource.getRepository(Category);

    const categoryFind: Array<Category> = await categoryRepository.find();

    const categories = returnAllCategoriesSchema.parse(categoryFind);

    return categories;
  };
