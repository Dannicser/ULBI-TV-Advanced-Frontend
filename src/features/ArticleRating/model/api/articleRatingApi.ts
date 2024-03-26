import { IRating } from "@/entities/RatingCard";
import { rtkApi } from "@/shared/api/rtkApi";

interface IArticleRateArgs {
  userId?: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], { userId?: string; articleId: string }>({
      query: ({ userId, articleId }) => ({
        url: "/article-ratings",
        params: {
          userId,
          articleId,
        },
      }),
    }),

    rateArticle: build.mutation<null, IArticleRateArgs>({
      query: (args) => ({
        url: "/article-ratings",
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useArticleRate = articleRatingApi.useRateArticleMutation;
