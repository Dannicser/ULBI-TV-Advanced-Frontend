import { IArticle } from "./model/types/article";
import { IArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { ArticleDetails } from "./ui/ArticleDetail/ArticleDetails";

import { getArticleDetailsData } from "./model/selectors/getArticleDetails";

export { ArticleDetails, IArticle, IArticleDetailsSchema, getArticleDetailsData };
