import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { IArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentSchema";

// суть нормализации - относиться к данным в стейте, как в базе данных, НЕ ХРАНИТЬ ОДИНАКОВЫЕ ДАННЫЕ!

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment: IComment) => comment.id, // поле по которому идет нормализация
});

//selector
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => {
  return state.articleDetailsPage?.comments || commentsAdapter.getInitialState();
});

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload); // !!! сам все сделает за нас
      })
      .addCase(fetchCommentsByArticleId.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

// EntityState
//  |
//  |
//  V

// схема нормализованных данных
//     {

//      сущности
//      entities: {
//
//     }
//     их айдишники
//     ids: []
//
// }

// РЕАЛЬНЫЙ ПРИМЕР!!

// ids: ["1", "2"],

// entities: {
//   "1": {
//     id: "1",
//     text: "е бой",

//   },
//   "2": {
//     id: "2",
//     text: "е бой иду в бой",
//   },}

// КОНСТАНТНАЯ СЛОЖНОСТЬ, НЕ НУЖНО ПРОХОДИТЬ ВЕСЬ МАССИВ

//39
