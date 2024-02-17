import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { addCommentForArticle } from "./addCommentForArticle";
import { getAuthData } from "entities/User";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("addCommentForArticle", () => {
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
    const response = { id: "1", user: { username: "dan", id: "1" }, text: "hi" };
    const state = {
      user: {
        authData: {
          id: "1",
          username: "dan",
        },
      },
      articleDetails: {
        data: {
          id: "1",
        },
      },
    };

    getState = jest.fn(() => {
      return state as StateSchema;
    });

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: response }));

    const thunk = addCommentForArticle("some text");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(response);
    expect(api.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  test("server error", async () => {
    const state = {
      user: {
        authData: {
          id: "1",
          username: "dan",
        },
      },
      articleDetails: {
        data: {
          id: "1",
        },
      },
    };

    getState = jest.fn(() => {
      return state as StateSchema;
    });

    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = addCommentForArticle("some text");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("server error");
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
