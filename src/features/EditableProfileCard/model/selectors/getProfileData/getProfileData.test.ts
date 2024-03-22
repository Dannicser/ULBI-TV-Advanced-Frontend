import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";

describe("getProfileData", () => {
  test("should return correct value", () => {
    const data = {
      firstname: "danil",
      lastname: "dmitriev",
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should return correct value with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
