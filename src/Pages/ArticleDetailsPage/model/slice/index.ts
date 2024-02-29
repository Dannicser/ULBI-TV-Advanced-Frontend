import { combineReducers } from "@reduxjs/toolkit";
import { IArticleDetailsPageSchema } from "../types";
import { articleDetailsRecommendationReducer } from "./articleDetailsRecommendationSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationReducer,
  comments: articleDetailsCommentsReducer,
  // можно другие редьюсеры продолжнать комбинировать
});
