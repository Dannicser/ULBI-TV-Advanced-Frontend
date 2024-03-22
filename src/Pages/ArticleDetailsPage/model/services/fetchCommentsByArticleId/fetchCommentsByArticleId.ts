import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IComment } from "@/entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, IThunkConfig<string>>(
  "fetchCommentsByArticleId",
  async (articleId, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<IComment[]>(`/comments`, {
        params: {
          articleId,
          _expand: "user",
        },
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
