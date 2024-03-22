import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("fetchProfiledata", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: jest.MockedFn<any>; // для extra api
  let api: jest.MockedFunctionDeep<AxiosStatic>;

  beforeEach(() => {
    dispatch = jest.fn(); // мокаем
    navigate = jest.fn();
    getState = jest.fn();
    api = mockedAxios;
  }); // отрабатывает перед каждым тестом

  test("success", async () => {
    const response = {
      firstname: "dan",
      lastname: "dmitriev",
    };

    mockedAxios.get.mockReturnValue(Promise.resolve({ data: response }));

    const thunk = fetchProfileData("1"); // создаем сам thunk (createAsyncThunk только создает фанк, его еще нужно вызвать)

    const result = await thunk(dispatch, getState, { api, navigate }); // мокаем thunkApi

    expect(dispatch).toHaveBeenCalledTimes(2); // !!
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(response);
  });

  test("fail auth error", async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = fetchProfileData("1");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(2); // сколько раз был вызван диспатч
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error");
  });
});
