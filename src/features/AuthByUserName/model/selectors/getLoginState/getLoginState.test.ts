import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
  test("should return the whole login state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "dan",
        password: "123",
        isLoading: true,
        error: "",
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: "dan",
      password: "123",
      isLoading: true,
      error: "",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
