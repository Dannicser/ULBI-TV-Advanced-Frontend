import { ICounterSchema } from "entities/Counter";
import { IUserSchema } from "entities/User";

export interface StateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
}
