import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "entities/Article";

export const getArticlesPageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view;
export const getArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 1;
export const getArticlesPageCount = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlePage?.hasMore || false; //?
export const getArticlesPageInited = (state: StateSchema) => state.articlePage?._inited;

export const getArticlesPageOrder = (state: StateSchema) => state.articlePage?.order || "asc";
export const getArticlesPageFieldSort = (state: StateSchema) => state.articlePage?.sort || ArticleSortField.CREATED;
export const getArticlesPageSearchText = (state: StateSchema) => state.articlePage?.search || "";
export const getArticlesPageType = (state: StateSchema) => state.articlePage?.type || ArticleType.ALL;
