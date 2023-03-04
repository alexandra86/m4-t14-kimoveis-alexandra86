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

  const addressFind: Address | null = await addressRepository.findOne({
    where: {
      id: request.body.address.id,
      street: request.body.address.street,
      zipCode: request.body.address.zipCode,
      number: request.body.address.number,
      city: request.body.address.city,
      state: request.body.address.state,
    },
  });

  console.log(request.body.address.id, "Olá");
  if (!!addressFind) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
