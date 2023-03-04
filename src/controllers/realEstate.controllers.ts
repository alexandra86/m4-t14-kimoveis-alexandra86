import { Request, Response } from "express";
import { IRealEstate } from "../interfaces/realEstate.interface";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";

export const createRealEstateController = async (
  request: Request,
  response: Response
) => {
  const realEstateData: IRealEstate = request.body;

  const newRealEstateData = await createRealEstateService(realEstateData);

  return response.status(201).json(newRealEstateData);
};
