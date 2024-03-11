import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";
describe("getProfileValidateErrors", () => {
  test("should return correct value", () => {
    const data = [ValidateProfileError.INCORRECT_USER_NAME];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_USER_NAME],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
  });

  test("should return correct value with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
