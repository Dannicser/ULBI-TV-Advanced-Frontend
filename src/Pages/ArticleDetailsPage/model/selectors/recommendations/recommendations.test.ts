import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from "./recommendations";

describe("recommendations", () => {
  test("getLoading should return correct value", () => {
    const state: Partial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          ids: [],
          entities: {},
        },
        recommendations: { ids: [], entities: {}, isLoading: true },
      },
    };

    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(true);
  });

  test("getLoading should return correct value with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(undefined);
  });

  test("getError should return correct value", () => {
    const state: Partial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          ids: [],
          entities: {},
        },
        recommendations: { ids: [], entities: {}, error: "error" },
      },
    };

    expect(getArticleRecommendationsError(state as StateSchema)).toBe("error");
  });

  test("getError should return correct value with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleRecommendationsError(state as StateSchema)).toBe(undefined);
  });
});
