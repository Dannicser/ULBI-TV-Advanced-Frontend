import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { fetchArticleById } from "./fetchArticleById";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("fetchArticleById", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: jest.MockedFn<any>;
  let api: jest.MockedFunctionDeep<AxiosStatic>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    navigate = jest.fn();
    api = mockedAxios;
  });

  test("success", async () => {
    const response = {
      title: "everything is gonna be alright",
    };

    mockedAxios.get.mockReturnValue(Promise.resolve({ data: response }));

    const thunk = fetchArticleById("1");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe("fulfilled");
  });

  test("fail with error 404", async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 404 }));

    const thunk = fetchArticleById("2");

    const result = await thunk(dispatch, getState, { api, navigate }); // создаем сам thunk (createAsyncThunk только создает фанк, его еще нужно вызвать)

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
