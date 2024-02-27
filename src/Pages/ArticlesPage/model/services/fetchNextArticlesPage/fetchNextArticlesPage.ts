import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import {
  getArticlesPageCount,
  getArticlesPageHasMore,
  getArticlesPageLoading,
} from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";
import { articlesPageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>("articlesPage/fetchNextArticlesPage", (_, thunkApi) => {
  try {
    const hasMore = getArticlesPageHasMore(thunkApi.getState());
    const page = getArticlesPageCount(thunkApi.getState());
    const isLoading = getArticlesPageLoading(thunkApi.getState());

    if (hasMore && !isLoading) {
      thunkApi.dispatch(articlesPageActions.setPage(page + 1));
      thunkApi.dispatch(fetchArticlesList({}));
    }
  } catch (error) {
    return thunkApi.rejectWithValue("error");
  }
});
