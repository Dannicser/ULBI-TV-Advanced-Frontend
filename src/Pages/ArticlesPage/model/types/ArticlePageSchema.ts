import { EntityState } from "@reduxjs/toolkit";
import { ArticleView, IArticle } from "entities/Article";

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
}
