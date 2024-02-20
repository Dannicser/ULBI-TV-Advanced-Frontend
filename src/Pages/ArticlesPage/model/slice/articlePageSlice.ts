import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ArticleView, IArticle } from "entities/Article";
import { IArticlePageSchema } from "../types/articlePageSchema";
import { StateSchema } from "app/providers/StoreProvider";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLE_VIEW_KEY } from "shared/const/localStorage";

// суть нормализации - относиться к данным в стейте, как в базе данных, НЕ ХРАНИТЬ ОДИНАКОВЫЕ ДАННЫЕ!

const articlesPageAdapter = createEntityAdapter<IArticle>({
  selectId: (article: IArticle) => article.id, // поле по которому идет нормализация
});

// selector
export const getArticles = articlesPageAdapter.getSelectors<StateSchema>((state) => state.articlePage || articlesPageAdapter.getInitialState());

export const articlePageSlice = createSlice({
  name: "articlePageSlice",
  initialState: articlesPageAdapter.getInitialState<IArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      window.localStorage.setItem(ARTICLE_VIEW_KEY, action.payload);
    },
    setInit: (state) => {
      const initial = (window.localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView) || ArticleView.SMALL;

      state.view = initial;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesPageAdapter.setAll(state, action.payload); // !!! сам все сделает за нас
      })
      .addCase(fetchArticlesList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articlesPageActions } = articlePageSlice;
export const { reducer: articlesPageReducer } = articlePageSlice;
