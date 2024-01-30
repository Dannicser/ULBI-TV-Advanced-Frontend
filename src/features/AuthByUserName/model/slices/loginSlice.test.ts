import { DeepPartial } from "@reduxjs/toolkit";
import { ILoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("setUsername", () => {
    const state: DeepPartial<ILoginSchema> = {
      username: "",
    };

    expect(loginReducer(state as ILoginSchema, loginActions.setUsername("dan"))).toEqual({ username: "dan" });
  });

  test("setPassword", () => {
    const state: DeepPartial<ILoginSchema> = {
      password: "",
    };

    expect(loginReducer(state as ILoginSchema, loginActions.setPassword("qwerty"))).toEqual({ password: "qwerty" });
  });
});

// можно писать тесты на экстраредьюсеры - expect(loginReducer(state as ILoginSchema, thunk.[fulfilled, rejected, pending] lesson - #36
