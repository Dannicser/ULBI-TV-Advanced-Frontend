import { County } from "entities/Country";
import { Currency } from "entities/Currency";

export interface IProfile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: County;
  city?: string;
  username?: string;
  avatar?: string;
}
