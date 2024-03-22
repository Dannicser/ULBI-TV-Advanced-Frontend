import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";
import { articlesPageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { SortOrder } from "@/shared/types";
import { ArticleSortField, ArticleType } from "@/entities/Article";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, IThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  (urlSearchParams, thunkApi) => {
    try {
      const inited = getArticlesPageInited(thunkApi.getState());

      if (!inited) {
        const orderFromUrl = urlSearchParams.get("order") as SortOrder;
        const sortFromUrl = urlSearchParams.get("sort") as ArticleSortField;
        const searchFromUrl = urlSearchParams.get("search") as string;
        const typeFromUrl = urlSearchParams.get("type") as ArticleType;

        const array = [orderFromUrl, sortFromUrl, searchFromUrl];

        if (orderFromUrl) {
          thunkApi.dispatch(articlesPageActions.setOrder(orderFromUrl));
        }

        if (sortFromUrl) {
          thunkApi.dispatch(articlesPageActions.setSort(sortFromUrl));
        }

        if (searchFromUrl) {
          thunkApi.dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        if (typeFromUrl) {
          thunkApi.dispatch(articlesPageActions.setType(typeFromUrl));
        }

        thunkApi.dispatch(articlesPageActions.setInit());
        thunkApi.dispatch(fetchArticlesList({}));
      }
    } catch (error) {
      return thunkApi.rejectWithValue("error");
    }
  }
);
