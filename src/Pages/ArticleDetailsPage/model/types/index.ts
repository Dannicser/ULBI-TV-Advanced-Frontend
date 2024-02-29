import { IArticleDetailsCommentsSchema } from "./ArticleDetailsCommentSchema";
import { IArticleDetailsRecommendationSchema } from "./ArticleDetailsRecommendationSchema";

// обобщающий тип нескольких схем

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsRecommendationSchema;
}
