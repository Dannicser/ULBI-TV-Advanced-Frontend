import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticlesPageCount,
  getArticlesPageFieldSort,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageLimit,
  getArticlesPageLoading,
  getArticlesPageOrder,
  getArticlesPageSearchText,
  getArticlesPageType,
  getArticlesPageView,
} from "./getArticlePageSelectors";
import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";

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

    expect(getArticlesPageLoading(state as StateSchema)).toBe(false);
  });

  //

  test("getArticlesPageView should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        view: ArticleView.BIG,
      },
    };

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleView.BIG);
  });

  test("getArticlesPageView with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageView(state as StateSchema)).toBe(undefined);
  });

  //

  test("getArticlesPageLimit should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        limit: 1,
      },
    };

    expect(getArticlesPageLimit(state as StateSchema)).toBe(1);
  });

  test("getArticlesPageLimit with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageLimit(state as StateSchema)).toBe(1);
  });

  //

  test("getArticlesPageCount should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        page: 3,
      },
    };

    expect(getArticlesPageCount(state as StateSchema)).toBe(3);
  });

  test("getArticlesPageCount with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageCount(state as StateSchema)).toBe(1); // by default
  });

  //

  test("getArticlesPageHasMore should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        hasMore: true,
      },
    };

    expect(getArticlesPageHasMore(state as StateSchema)).toBe(true);
  });

  test("getArticlesPageHasMore with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageHasMore(state as StateSchema)).toBe(false);
  });

  //

  test("getArticlesPageInited should return correct value", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        _inited: true,
      },
    };

    expect(getArticlesPageInited(state as StateSchema)).toBe(true);
  });

  test("getArticlesPageInited with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageInited(state as StateSchema)).toBe(undefined);
  });

  //

  test("getArticlesPageOrder", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        order: "asc",
      },
    };

    expect(getArticlesPageOrder(state as StateSchema)).toBe("asc");
  });

  test("getArticlesPageOrder with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageOrder(state as StateSchema)).toBe("asc");
  });

  //

  test("getArticlesPageFieldSort", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        sort: ArticleSortField.CREATED,
      },
    };

    expect(getArticlesPageFieldSort(state as StateSchema)).toBe(ArticleSortField.CREATED);
  });

  test("getArticlesPageFieldSort with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageFieldSort(state as StateSchema)).toBe(ArticleSortField.CREATED);
  });

  //

  test("getArticlesPageSearchText", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        search: "Vova pidor",
      },
    };

    expect(getArticlesPageSearchText(state as StateSchema)).toBe("Vova pidor");
  });

  test("getArticlesPageSearchText with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageSearchText(state as StateSchema)).toBe("");
  });

  //

  test("getArticlesPageType", () => {
    const state: DeepPartial<StateSchema> = {
      articlePage: {
        type: ArticleType.IT,
      },
    };

    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.IT);
  });

  test("getArticlesPageType with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleType.ALL);
  });

  //
});
