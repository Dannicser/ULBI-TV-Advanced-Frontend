import { createSlice } from "@reduxjs/toolkit";
import { IActicleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState: IActicleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const acticleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: acticleDetailsActions } = acticleDetailsSlice;
export const { reducer: articleDetailsReducer } = acticleDetailsSlice;
