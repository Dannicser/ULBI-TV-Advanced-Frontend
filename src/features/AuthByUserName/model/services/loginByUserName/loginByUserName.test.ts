import axios from "axios";
import { loginByUserName } from "./loginByUserName";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities/User";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true); // глубокое мокание, мокаем не только сам модуль, но и внутренние поля для ts

describe("loginByUserName", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  }); // отрабатывает перед каждым тестом

  test("success auth", async () => {
    const userValue = { username: "123", id: "1" };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const action = loginByUserName({ username: "123", password: "123" });

    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3); // !!
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled(); // запрос на сервер был отправлен
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error auth", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = loginByUserName({ username: "123", password: "123" });

    const result = await action(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2); // !
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error");
  });
});
