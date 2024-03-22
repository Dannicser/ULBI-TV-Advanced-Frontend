import { IProfile } from "@/entities/Profile";
import { ValidateProfileError } from "../consts/consts";

export interface IProfileSchema {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
  readonly?: boolean;
}
