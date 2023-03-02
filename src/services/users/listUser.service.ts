import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserRepo } from "../../interfaces/users.interfaces";
import { returnAllUserSchema } from "../../schemas/users.schema";
import { IAllUsersReturn } from "../../interfaces/users.interfaces";

export const listUsersService = async (): Promise<IAllUsersReturn> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find();

  const users = returnAllUserSchema.parse(findUsers);
  return users;
};
