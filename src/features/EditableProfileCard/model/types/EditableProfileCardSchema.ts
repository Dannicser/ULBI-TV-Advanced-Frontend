import { IProfile } from "entities/Profile";

export interface IProfileSchema {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
  readonly?: boolean;
}

export enum ValidateProfileError {
  INCORRECT_USER_NAME = "INCORRECT_USER_NAME",
  INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
  INCORRECT_USER_COUNTRY = "INCORRECT_USER_COUNTRY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}
