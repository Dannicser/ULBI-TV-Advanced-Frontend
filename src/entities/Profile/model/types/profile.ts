import { County } from "entities/Country";
import { Currency } from "entities/Currency";

export interface IProfileSchema {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
  readonly?: boolean;
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

export enum ValidateProfileError {
  INCORRECT_USER_NAME = "INCORRECT_USER_NAME",
  INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
  INCORRECT_USER_COUNTRY = "INCORRECT_USER_COUNTRY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}
