import { Request, Response } from "express";
import { ICreateRealEstate } from "../interfaces/realEstate.interface";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { listRealEstatesService } from "../services/realEstate/listRealEstates.service";

export const createRealEstateController = async (
  request: Request,
  response: Response
) => {
  const realEstateData: ICreateRealEstate = request.body;

  const newRealEstateData = await createRealEstateService(realEstateData);

  return response.status(201).json(newRealEstateData);
};

export const listRealEstateController = async (
  request: Request,
  response: Response
) => {
  const realEstate = await listRealEstatesService();

  return response.json(realEstate);
};
