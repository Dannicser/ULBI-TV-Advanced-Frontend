import { StateSchema } from "@/app/providers/StoreProvider";
import { getCanUserEditArticle } from "./article";

describe("article", () => {
  test("getCanUserEditArticle can edit", () => {
    const state: Partial<StateSchema> = {
      user: { authData: { id: "1", username: "dan" }, _initited: true },
      articleDetails: {
        data: {
          userId: "1",
          title: "test",
          subtitle: "test",
          img: "test",
          views: 1,
          createdAt: "test",
          type: [],
          blocks: [],
          id: "2",
        },
      },
    };

    expect(getCanUserEditArticle(state as StateSchema)).toBe(true);
  });

  test("getCanUserEditArticle can't edit", () => {
    const state: Partial<StateSchema> = {
      user: { authData: { id: "1", username: "dan" }, _initited: true },
      articleDetails: {
        data: {
          userId: "2",
          title: "test",
          subtitle: "test",
          img: "test",
          views: 1,
          createdAt: "test",
          type: [],
          blocks: [],
          id: "2",
        },
      },
    };

    expect(getCanUserEditArticle(state as StateSchema)).toBe(false);
  });
});
