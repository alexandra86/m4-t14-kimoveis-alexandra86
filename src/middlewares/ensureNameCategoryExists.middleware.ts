import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors";
import { ICategoryRepo } from "../interfaces/categories.interfaces";

export const ensureNameCategoryExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const categoryRepository: ICategoryRepo =
    AppDataSource.getRepository(Category);
  const categoryFind = await categoryRepository.findOne({
    where: {
      name: request.body.name,
    },
  });

  if (!!categoryFind) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
