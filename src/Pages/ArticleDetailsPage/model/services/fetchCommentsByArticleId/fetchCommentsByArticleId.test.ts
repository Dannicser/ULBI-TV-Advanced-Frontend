import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("fetchCommentsByArticleId", () => {
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
    const response = [
      {
        id: "1",
        user: {
          id: "1",
          username: "dan",
        },
        text: "he bro",
      },
    ];

    mockedAxios.get.mockReturnValue(Promise.resolve({ data: response }));

    const thunk = fetchCommentsByArticleId("1");

    const result = await thunk(dispatch, getState, {
      api,
      navigate,
    });

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(response);
  });

  test("failed", async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({ status: 404 }));

    const thunk = fetchCommentsByArticleId("id");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("rejected");
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe("error");
  });
});
