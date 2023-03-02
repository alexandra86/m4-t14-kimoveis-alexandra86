import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ensureLoggedInUserValidatMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const idParams: number = parseInt(request.params.id);
  const userId: string = request.user.id;
  const admin: boolean = request.user.admin;

  if (admin === true) {
    return next();
  }
  if (admin === false) {
    if (idParams !== parseInt(userId)) {
      throw new AppError("Insufficient permission", 403);
    }
  }
  return next();
};
