import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "./comments";

describe("comments", () => {
  test("getLoading should return correct value", () => {
    const state: Partial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true,
          ids: [],
          entities: {},
        },
        recommendations: { ids: [], entities: {} },
      },
    };

    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
  });

  test("getLoading should return correct value with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(undefined);
  });

  test("getError should return correct value", () => {
    const state: Partial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true,
          ids: [],
          entities: {},
          error: "error",
        },
        recommendations: { ids: [], entities: {} },
      },
    };

    expect(getArticleCommentsError(state as StateSchema)).toBe("error");
  });

  test("getError should return correct value with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
  });
});
