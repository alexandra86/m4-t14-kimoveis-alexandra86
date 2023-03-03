import { Request, Response } from "express";
import { ICategory } from "../interfaces/categories.interfaces";
import { createCategoryService } from "../services/categories/createCategory.service";

export const createCategoryController = async (
  request: Request,
  response: Response
) => {
  const categoryData: ICategory = request.body;

  const category = await createCategoryService(categoryData);

  return response.status(201).json(category);
};
