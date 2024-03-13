import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getArticlesPageCount } from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";
import { articlesPageActions, articlesPageReducer } from "../../slice/articlePageSlice";

jest.mock("axios");

jest.mock("../fetchArticlesList/fetchArticlesList"); // мокаем и другие модули

const mockedAxios = jest.mocked(axios, true);

describe("fetchNextArticlesPage", () => {
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

  test("success - there are data still left", async () => {
    const state = {
      articlePage: {
        page: 1,
        limit: 3,
        hasMore: true,
        isLoading: false,
      },
    };

    getState = jest.fn(() => {
      return state as StateSchema;
    });

    mockedAxios.get.mockReturnValue(Promise.resolve(undefined));

    const thunk = fetchNextArticlesPage();
    const result = await thunk(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(4); // pending, fulfilled + two dispatch
    expect(fetchArticlesList).toHaveBeenCalled();
  });

  test("fail - there are no data left", async () => {
    const state = {
      articlePage: {
        page: 1,
        limit: 3,
        hasMore: false,
        isLoading: false,
      },
    };

    getState = jest.fn(() => {
      return state as StateSchema;
    });

    const thunk = fetchNextArticlesPage();
    const result = await thunk(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test("fail - there are data but loading", async () => {
    const state = {
      articlePage: {
        page: 1,
        limit: 3,
        hasMore: true,
        isLoading: true,
      },
    };

    getState = jest.fn(() => {
      return state as StateSchema;
    });

    const thunk = fetchNextArticlesPage();
    const result = await thunk(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
