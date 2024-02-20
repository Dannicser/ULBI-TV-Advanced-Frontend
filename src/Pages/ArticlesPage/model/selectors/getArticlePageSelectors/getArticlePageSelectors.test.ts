import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageLoading, getArticlesPageView } from "./getArticlePageSelectors";
import { ArticleView } from "entities/Article";

describe("getArticlePageSelectors", () => {
  test("getArticlesPageLoading should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        isLoading: true,
      },
    };

    expect(getArticlesPageLoading(state as StateSchema)).toBe(true);
  });

  test("getArticlesPageLoading with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageLoading(state as StateSchema)).toBe(undefined);
  });

  test("getArticlesPageView should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        isLoading: true,
        view: ArticleView.BIG,
      },
    };

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.BIG);
  });

  test("getArticlesPageView with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageView(state as StateSchema)).toBe(undefined);
  });
});
