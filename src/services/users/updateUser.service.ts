import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import {
  IUpdateUser,
  iUserRepo,
  IUserReturn,
} from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

export const updateUserService = async (
  newUserData: IUpdateUser,
  id: number
): Promise<IUserReturn> => {
  if (Object.keys(newUserData).length === 0) {
    throw new AppError("invalid data!", 400);
  }

  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: id,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(user);

  const updatedUser = returnUserSchema.parse(user);
  return updatedUser;
};
