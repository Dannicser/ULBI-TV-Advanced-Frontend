import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IArticle } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";

interface fetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], fetchArticlesListProps, IThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (args, thunkApi) => {
    try {
      const { page } = args;

      const limit = getArticlesPageLimit(thunkApi.getState());

      const response = await thunkApi.extra.api.get<IArticle[]>(`/articles`, { params: { _limit: limit, _page: page } });

      if (!response.data) {
        return thunkApi.rejectWithValue("error");
      }

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
