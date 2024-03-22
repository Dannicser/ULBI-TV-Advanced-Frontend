import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IArticle } from "@/entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
  "fetch/fetchArticleRecommendations",
  async (_, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.get<IArticle[]>(`/articles`, {
        params: {
          _limit: 4,
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
