import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ArticleSortField, ArticleType, ArticleView, IArticle } from "entities/Article";
import { IArticlePageSchema } from "../types/articlePageSchema";
import { StateSchema } from "app/providers/StoreProvider";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLE_VIEW_KEY } from "shared/const/localStorage";
import { SortOrder } from "shared/types";

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
    page: 1,
    hasMore: true,
    limit: 6, // сколько подгружать за раз
    search: "",
    sort: ArticleSortField.CREATED,
    order: "asc",
    type: ArticleType.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      window.localStorage.setItem(ARTICLE_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setInit: (state) => {
      const initial = (window.localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView) || ArticleView.SMALL;

      state.view = initial;
      state.limit = initial === ArticleView.BIG ? 3 : 6;
      state._inited = true;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;

        if (action.meta.arg.isReplace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length === state.limit; // если с бека пришло статей меньше чем лимит, но их там просто больше нет и еще один запрос не нужен

        //в поле meta хранятся аргументы, которые мы прокидываем в фанк
        if (action.meta.arg.isReplace) {
          articlesPageAdapter.setAll(state, action.payload);
        } else {
          articlesPageAdapter.addMany(state, action.payload); // !!! сам все сделает за нас, добавляем в конец для беск ленты
        }
      })
      .addCase(fetchArticlesList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articlesPageActions } = articlePageSlice;
export const { reducer: articlesPageReducer } = articlePageSlice;
