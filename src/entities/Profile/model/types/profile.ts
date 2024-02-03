import { County, Currency } from "shared/const/common";

export interface IProfileSchema {
  data?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}

export interface IProfile {
  firstname: string;
  lastname: string;
  age: string;
  currency: Currency;
  country: County;
  city: string;
  username: string;
  avatar: string;
}
