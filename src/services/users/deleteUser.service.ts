import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserRepo } from "../../interfaces/users.interfaces";

export const deleteUserService = async (id: number): Promise<void> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  await userRepository.softRemove(user!);
};
