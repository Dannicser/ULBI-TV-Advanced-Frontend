import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<IArticle[], void, IThunkConfig<string>>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<IArticle[]>(`/articles`);

    if (!response.data) {
      return thunkApi.rejectWithValue("error");
    }

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue("error");
  }
});
