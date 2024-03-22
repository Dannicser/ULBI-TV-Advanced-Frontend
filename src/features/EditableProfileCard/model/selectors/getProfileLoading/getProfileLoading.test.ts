import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading", () => {
  test("should return correct value", () => {
    const data = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toBe(data);
  });

  test("should return correct value with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
