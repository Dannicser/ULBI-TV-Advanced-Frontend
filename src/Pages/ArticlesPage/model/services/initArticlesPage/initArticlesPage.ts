import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";
import { articlesPageActions } from "../../slice/articlePageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>("articlesPage/initArticlesPage", (_, thunkApi) => {
  try {
    const inited = getArticlesPageInited(thunkApi.getState());

    if (!inited) {
      thunkApi.dispatch(articlesPageActions.setInit());
      thunkApi.dispatch(fetchArticlesList({ page: 1 }));
    }
  } catch (error) {
    return thunkApi.rejectWithValue("error");
  }
});
