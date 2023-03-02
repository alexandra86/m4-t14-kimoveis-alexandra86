import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const ensureIsAdminValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const admin: boolean = request.user.admin;

  if (admin !== true) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
