import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { iUserRepo } from "../interfaces/users.interfaces";

export const ensureEmailExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const emailFind = await userRepository.findOne({
    where: {
      email: request.body.email,
    },
  });

  if (!!emailFind) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
