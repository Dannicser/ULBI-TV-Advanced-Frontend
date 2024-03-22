import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType, IArticle } from "@/entities/Article";
import {
  getArticlesPageCount,
  getArticlesPageFieldSort,
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearchText,
  getArticlesPageType,
} from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";
import { addQuaryParams } from "@/shared/lib/url/addQuaryParams";

interface IFetchArticlesListProps {
  isReplace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps, IThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (_, thunkApi) => {
    const limit = getArticlesPageLimit(thunkApi.getState());
    const order = getArticlesPageOrder(thunkApi.getState());
    const sort = getArticlesPageFieldSort(thunkApi.getState());
    const search = getArticlesPageSearchText(thunkApi.getState());
    const page = getArticlesPageCount(thunkApi.getState());
    const type = getArticlesPageType(thunkApi.getState());

    try {
      addQuaryParams({ sort, order, search, type });

      const response = await thunkApi.extra.api.get<IArticle[]>(`/articles`, {
        params: { _limit: limit, _page: page, _order: order, _sort: sort, q: search, type: type === ArticleType.ALL ? undefined : type }, //q - поисковая строка
      });

      if (!response.data) {
        return thunkApi.rejectWithValue("error");
      }

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
