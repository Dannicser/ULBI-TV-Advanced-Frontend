import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "entities/Article";
import { IArticleDetailsRecommendationSchema } from "../types/ArticleDetailsRecommendationSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { StateSchema } from "app/providers/StoreProvider";

const articleRecommendationAdapter = createEntityAdapter<IArticle>({
  selectId: (article: IArticle) => article.id, // поле по которому идет нормализация
});

export const getArticleRecommendations = articleRecommendationAdapter.getSelectors<StateSchema>((state) => {
  return state.articleDetailsPage?.recommendations || articleRecommendationAdapter.getInitialState();
});

export const articleDetailsRecommendationSlice = createSlice({
  name: "articleDetailsRecommendationSlice",
  initialState: articleRecommendationAdapter.getInitialState<IArticleDetailsRecommendationSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsRecommendationActions } = articleDetailsRecommendationSlice;
export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
