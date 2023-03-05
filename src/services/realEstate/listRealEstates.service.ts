import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import {
  IAllRealEstateReturn,
  IRealEstateRepo,
} from "../../interfaces/realEstate.interface";
import { returnAllRealEstateSchema } from "../../schemas/realEstate.schemas";

export const listRealEstatesService =
  async (): Promise<IAllRealEstateReturn> => {
    const realEstateRepository: IRealEstateRepo =
      AppDataSource.getRepository(RealEstate);

    const realEstateFind: Array<RealEstate> = await realEstateRepository.find({
      relations: {
        address: true,
      },
    });

    // const realEstates = returnAllRealEstateSchema.parse(realEstateFind);

    return realEstateFind;
  };
