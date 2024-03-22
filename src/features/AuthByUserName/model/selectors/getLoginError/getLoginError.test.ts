import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
  test("should return error value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };

    expect(getLoginError(state as StateSchema)).toBe("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
