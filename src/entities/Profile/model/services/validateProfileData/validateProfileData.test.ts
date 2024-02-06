import { ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "./validateProfileData";

describe("validateProfileData", () => {
  const profile = {
    firstname: "dan",
    lastname: "dmitriev",
    age: 21,
  };

  test("success", () => {
    const result = validateProfileData(profile);

    expect(result).toEqual([]);
  });

  test("without name", () => {
    const profile = {
      age: 21,
    };

    const result = validateProfileData(profile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_NAME]);
  });

  test("without age", () => {
    const profile = {
      firstname: "dan",
      lastname: "dmitriev",
    };

    const result = validateProfileData(profile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
  });

  test("without data", () => {
    const profile = undefined;

    const result = validateProfileData(profile);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test("empty", () => {
    const profile = {};

    const result = validateProfileData(profile);

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_NAME, ValidateProfileError.INCORRECT_USER_AGE]);
  });
});
