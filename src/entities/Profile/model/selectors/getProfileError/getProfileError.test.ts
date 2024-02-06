import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError", () => {
  test("should return correct value", () => {
    const data = "error";

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: data,
      },
    };

    expect(getProfileError(state as StateSchema)).toBe(data);
  });

  test("should return correct value with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
