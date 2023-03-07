import { Request, Response } from "express";
import { createScheduleService } from "../services/schedules/createSchedule.service";

export const createScheduleController = async (
  request: Request,
  response: Response
) => {
  const ScheduleData = request.body;
  const userId = parseInt(request.user.id);

  await createScheduleService(ScheduleData, userId);

  return response.status(201).json({ message: "Schedule created" });
};
