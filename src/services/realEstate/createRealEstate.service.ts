import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import {
  IRealEstate,
  IRealEstateRepo,
} from "../../interfaces/realEstate.interface";
import { IAddressRepo } from "../../interfaces/address.interfaces";
import { ICategoryRepo } from "../../interfaces/categories.interfaces";
import { AppError } from "../../errors";
export const createRealEstateService = async (
  realEstateData: IRealEstate
): Promise<any> => {
  const addressRepository: IAddressRepo = AppDataSource.getRepository(Address);

  const categoryRepository: ICategoryRepo =
    AppDataSource.getRepository(Category);

  const address: Address = addressRepository.create(realEstateData.address);

  await addressRepository.save(address);

  const realEstateRepository: IRealEstateRepo =
    AppDataSource.getRepository(RealEstate);

  const categoryFind = await categoryRepository.findOneBy({
    id: realEstateData.categoryId,
  });

  if (!categoryFind) {
    throw new AppError("Category not found", 404);
  }

  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateData,
    address: address,
    category: categoryFind,
  });
  return realEstate;
};
