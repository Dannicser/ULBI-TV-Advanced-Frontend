import { IProfile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: IProfile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstname, lastname, age } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_NAME);
  }

  if (!age) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE);
  }

  return errors;
};
