import { ArticleView } from "entities/Article";
import { IArticlePageSchema } from "../types/articlePageSchema";
import { articlesPageActions, articlesPageReducer } from "./articlePageSlice";

describe("articlePageSlice", () => {
  test("setInit", () => {
    const state: IArticlePageSchema = {
      view: ArticleView.BIG,
      ids: [],
      entities: {},
    };

    expect(articlesPageReducer(state as IArticlePageSchema, articlesPageActions.setInit())).toEqual({
      view: ArticleView.SMALL,
      ids: [],
      entities: {},
    });
  });

  test("setInit with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setInit())).toEqual({
      view: ArticleView.SMALL,
      ids: [],
      entities: {},
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
    };

    expect(articlesPageReducer(state as IArticlePageSchema, articlesPageActions.setView(ArticleView.SMALL))).toEqual({
      view: ArticleView.SMALL,
      ids: [],
      entities: {},
    });
  });

  test("setView with empty state", () => {
    expect(articlesPageReducer(undefined, articlesPageActions.setView(ArticleView.SMALL))).toEqual({
      view: ArticleView.SMALL,
      ids: [],
      entities: {},
      error: undefined,
      isLoading: false,
    });
  });
});
