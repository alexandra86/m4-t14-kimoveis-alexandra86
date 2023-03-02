import { request, Request, Response } from "express";
import { IUpdateUser, IUser } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUser.service";
import { updateUserService } from "../services/users/updateUser.service";

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

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUpdateUser = request.body;
  const id = parseInt(request.params.id);

  const updatedUser = await updateUserService(userData, id);

  return response.json(updatedUser);
};

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const id = parseInt(request.params.id);
  await deleteUserService(id);

  return response.status(204).send();
};
