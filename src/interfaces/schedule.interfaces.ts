import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../entities";
import {
  createScheduleSchema,
  returnScheduleSchema,
} from "../schemas/schedule.schema";

export type IcreateSchedule = z.infer<typeof createScheduleSchema>;
export type IReturnSchedule = z.infer<typeof returnScheduleSchema>;

export type IScheduleRepo = Repository<Schedule>;
export type IScheduleByRealEstate = Array<Schedule>;
