import { EntityState } from "@reduxjs/toolkit";
import { ArticleSortField, ArticleType, ArticleView, IArticle } from "@/entities/Article";
import { SortOrder } from "@/shared/types";

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  page: number;
  limit: number;
  hasMore: boolean;

  order: SortOrder;
  sort: ArticleSortField;
  search: string;

  view: ArticleView;

  type: ArticleType;

  _inited: boolean;
}
