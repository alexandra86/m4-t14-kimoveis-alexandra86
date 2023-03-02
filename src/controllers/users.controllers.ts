import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUser.service";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export const listUsersController = async (
  request: Request,
  response: Response
) => {
  const users = await listUsersService();

  return response.json(users);
};
