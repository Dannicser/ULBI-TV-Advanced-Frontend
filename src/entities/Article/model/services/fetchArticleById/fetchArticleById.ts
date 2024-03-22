import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../../types/article";
import { IThunkConfig } from "@/app/providers/StoreProvider";

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
  "articleDetails/fetchArticleById",
  async (articleId, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<IArticle>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data as IArticle;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
