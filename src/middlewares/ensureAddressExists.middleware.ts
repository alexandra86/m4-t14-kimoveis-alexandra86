import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { AppError } from "../errors";
import { IAddressRepo } from "../interfaces/address.interfaces";

export const ensureAddressExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const addressRepository: IAddressRepo = AppDataSource.getRepository(Address);
  const addressData: Address = request.body.address;

  if (addressData) {
    const addressFind: Address | null = await addressRepository.findOne({
      where: {
        street: request.body.address.street,
        zipCode: request.body.address.zipCode,
        number: request.body.address?.number,
        city: request.body.address.city,
        state: request.body.address.state,
      },
    });
    if (!!addressFind || addressFind !== null) {
      throw new AppError("Address already exists", 409);
    }
  }

  return next();
};
