import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};
