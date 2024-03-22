import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IComment } from "@/entities/Comment";
import { getAuthData } from "@/entities/User";

import { getArticleDetailsData } from "@/entities/Article";

import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
  "articleDetails/addCommentForArticle",
  async (text, thunkApi) => {
    try {
      const userData = getAuthData(thunkApi.getState()); // !!!!!!!!!!

      const article = getArticleDetailsData(thunkApi.getState());

      if (!userData || !text || !article) {
        return thunkApi.rejectWithValue("no data");
      }

      const response = await thunkApi.extra.api.post<IComment>("/comments", {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!response?.data) {
        return thunkApi.rejectWithValue("server error");
      }

      thunkApi.dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue("unexpected error");
    }
  }
);
