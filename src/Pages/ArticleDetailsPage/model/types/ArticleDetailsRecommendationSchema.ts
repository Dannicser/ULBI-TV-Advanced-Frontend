import { EntityState } from "@reduxjs/toolkit";
import { IArticle } from "entities/Article";

export interface IArticleDetailsRecommendationSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
}
