import { IProfileSchema } from "../types/EditableProfileCardSchema";
import { profileActions, profileReducer } from "./profileSlice";

describe("profileSlice", () => {
  test("setReadonly", () => {
    const state: IProfileSchema = {
      readonly: false,
    };

    expect(profileReducer(state as IProfileSchema, profileActions.setReadonly())).toEqual({ readonly: true, validateErrors: undefined });
  });

  test("updateProfile", () => {
    const state: IProfileSchema = {
      data: { firstname: "danil", lastname: "dmitriev" },
    };

    expect(profileReducer(state as IProfileSchema, profileActions.updateProfile({ firstname: "lisa" }))).toEqual({
      data: { lastname: "dmitriev", firstname: "lisa" },
    });
  });
});
