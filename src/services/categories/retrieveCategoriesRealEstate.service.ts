import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import {
  ICategoryRealEstate,
  ICategoryRepo,
} from "../../interfaces/categories.interfaces";

export const retrieveCategoriesByRealEstateService = async (
  idCategory: number
): Promise<ICategoryRealEstate> => {
  const categoryRepository: ICategoryRepo =
    AppDataSource.getRepository(Category);

  const categoryFind: Category | null = await categoryRepository.findOne({
    where: {
      id: idCategory,
    },
  });

  if (!categoryFind) {
    throw new AppError("Category not found", 404);
  }

  const realEstateByCategoy: ICategoryRealEstate =
    await categoryRepository.find({
      where: {
        id: idCategory!,
      },
      relations: {
        realEstate: true,
      },
    });

  return realEstateByCategoy;
};
