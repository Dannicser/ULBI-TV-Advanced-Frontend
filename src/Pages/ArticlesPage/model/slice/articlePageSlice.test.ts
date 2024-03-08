import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";
import { IArticlePageSchema } from "../types/articlePageSchema";
import { articlesPageActions, articlesPageReducer } from "./articlePageSlice";

describe("articlePageSlice", () => {
  test("setInit", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      ids: [],
      entities: {},
      limit: 0,
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state as IArticlePageSchema, articlesPageActions.setInit())).toEqual({
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: true,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setInit with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setInit())).toEqual({
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: true,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
      error: undefined,
      isLoading: false,
    });
  });

  //
  //

  test("setView", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      ids: [],
      entities: {},
      limit: 0,
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state as IArticlePageSchema, articlesPageActions.setView(ArticleView.SMALL))).toEqual({
      view: ArticleView.SMALL,
      ids: [],
      entities: {},
      limit: 0,
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setView with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setView(ArticleView.BIG))).toEqual({
      view: ArticleView.BIG,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
      error: undefined,
      isLoading: false,
    });
  });

  test("setPage", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state, articlesPageActions.setPage(2))).toEqual({
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 2,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setPage with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setPage(4))).toEqual({
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 4,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
      error: undefined,
      isLoading: false,
    });
  });

  test("setOrder", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state, articlesPageActions.setOrder("desc"))).toEqual({
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "desc",
      type: ArticleType.ALL,
    });
  });

  test("setOrder with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setOrder("desc"))).toEqual({
      isLoading: false,
      error: undefined,
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "desc",
      type: ArticleType.ALL,
    });
  });

  test("setSearch", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state, articlesPageActions.setSearch("i will reach what i want"))).toEqual({
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "i will reach what i want",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setSearch with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setSearch("i will reach what i want"))).toEqual({
      isLoading: false,
      error: undefined,
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "i will reach what i want",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setSort", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state, articlesPageActions.setSort(ArticleSortField.TITLE))).toEqual({
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.TITLE,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setSort with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setSort(ArticleSortField.VIEWS))).toEqual({
      isLoading: false,
      error: undefined,
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.VIEWS,
      order: "asc",
      type: ArticleType.ALL,
    });
  });

  test("setType", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.ALL,
    };

    expect(articlesPageReducer(state, articlesPageActions.setType(ArticleType.IT))).toEqual({
      view: ArticleView.BIG,
      limit: 1,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.IT,
    });
  });

  test("setType with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setType(ArticleType.SCIENCE))).toEqual({
      isLoading: false,
      error: undefined,
      view: ArticleView.SMALL,
      limit: 6,
      ids: [],
      entities: {},
      hasMore: true,
      page: 1,
      _inited: false,
      search: "",
      sort: ArticleSortField.CREATED,
      order: "asc",
      type: ArticleType.SCIENCE,
    });
  });
});
