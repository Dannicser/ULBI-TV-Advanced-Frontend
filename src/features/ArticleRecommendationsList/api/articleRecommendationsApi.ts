import { rtkApi } from "shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit: number) => ({
        url: "/articles",
        params: { _limit: limit },
      }),
    }),

    // тут могут быть другие методы
  }),
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery; // используем готовый хук на каждый метод
