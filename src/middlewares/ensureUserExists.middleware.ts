import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces/users.interfaces";

export const ensureUserExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOne({
    where: {
      id: parseInt(request.params.id),
    },
  });

  if (!userFind) {
    throw new AppError("User not found", 404);
  }
  return next();
};
