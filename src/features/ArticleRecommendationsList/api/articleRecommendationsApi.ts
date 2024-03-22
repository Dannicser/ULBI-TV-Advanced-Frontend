import { IArticle } from "@/entities/Article";
import { rtkApi } from "@/shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<IArticle[], number>({
      query: (limit) => ({
        url: "/articles",
        params: { _limit: limit },
      }),
    }),

    // тут могут быть другие методы
  }),
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery; // используем готовый хук на каждый метод
