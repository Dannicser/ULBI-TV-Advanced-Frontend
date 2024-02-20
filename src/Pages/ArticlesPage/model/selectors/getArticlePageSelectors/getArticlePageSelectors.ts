import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view;
