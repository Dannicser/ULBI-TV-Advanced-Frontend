import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from "./getArticleDetails";

describe("getArticleDetail", () => {
  test("getIsLoading", () => {
    const state: Partial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toBe(true);
  });

  test("getIsLoading with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetailsLoading(state as StateSchema)).toBe(undefined);
  });

  test("getError", () => {
    const state: Partial<StateSchema> = {
      articleDetails: {
        error: "error",
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toBe("error");
  });

  test("getError with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetailsLoading(state as StateSchema)).toBe(undefined);
  });

  test("get articleDetails data", () => {
    const article = { id: "1", title: "", subtitle: "", img: "", views: 0, createdAt: "", type: [], blocks: [] };

    const state: Partial<StateSchema> = {
      articleDetails: {
        data: article,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  test("get articleDetails data with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
