import { County } from "entities/Country";
import { Currency } from "entities/Currency";

export interface IProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}

export interface IProfile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: County;
  city?: string;
  username?: string;
  avatar?: string;
}
