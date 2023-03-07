import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";
@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedule)
  @JoinColumn()
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedule)
  @JoinColumn()
  user: User;
}

export { Schedule };
