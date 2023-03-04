import { Repository } from "typeorm";
import { Address } from "../entities";

export type IAddressRepo = Repository<Address>;
