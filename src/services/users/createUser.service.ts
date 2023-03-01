import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IUser,
  iUserRepo,
  IUserReturn,
} from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

export const createUserService = async (
  userData: IUser
): Promise<IUserReturn> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};
