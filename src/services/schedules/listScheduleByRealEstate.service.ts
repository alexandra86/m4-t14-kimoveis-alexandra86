import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { IScheduleByRealEstate } from "../../interfaces/schedule.interfaces";

export const listScheduleByRealEstateService = async (
  id: number
): Promise<any> => {
  const realEstateRepository = AppDataSource.getRepository(RealEstate);
  const realEstateFind = await realEstateRepository.findOne({
    where: {
      id: id,
    },
  });
  if (!realEstateFind) {
    throw new AppError("RealEstate not found", 404);
  }
  const findScheduleRealEstate = await realEstateRepository
    .createQueryBuilder("realEstate")
    .select(["realEstate", "address", "categories", "schedule", "users"])
    .innerJoin("realEstate.address", "address")
    .innerJoin("realEstate.category", "categories")
    .innerJoin("realEstate.schedules", "schedule")
    .innerJoin("schedule.user", "users")
    .where("realEstate.id = :id", { id })
    .getOne();

  return findScheduleRealEstate;
};
