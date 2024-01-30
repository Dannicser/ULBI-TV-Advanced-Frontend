import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("shoud return password value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "dan123",
      },
    };

    expect(getLoginPassword(state as StateSchema)).toBe("dan123");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
  });
});
