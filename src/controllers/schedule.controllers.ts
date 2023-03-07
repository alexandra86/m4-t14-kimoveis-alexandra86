import { Request, Response } from "express";
import { createScheduleService } from "../services/schedules/createSchedule.service";
import { listScheduleByRealEstateService } from "../services/schedules/listScheduleByRealEstate.service";

export const createScheduleController = async (
  request: Request,
  response: Response
) => {
  const ScheduleData = request.body;
  const userId = parseInt(request.user.id);

  await createScheduleService(ScheduleData, userId);

  return response.status(201).json({ message: "Schedule created" });
};

export const listScheduleByRealEstateController = async (
  request: Request,
  response: Response
) => {
  const id: number = parseInt(request.params.id);
  const scheduleByRealEstate = await listScheduleByRealEstateService(id);
  return response.json(scheduleByRealEstate);
};
