import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view;
export const getArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 1;
export const getArticlesPageCount = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlePage?.hasMore || false; //?
