import { ArticleView, IArticle, ArticleType } from "./model/types/article";
import { IArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { ArticleDetails } from "./ui/ArticleDetail/ArticleDetails";

import { getArticleDetailsData } from "./model/selectors/getArticleDetails";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { ArticleViewSwitcher } from "./ui/ArticleViewSwitcher/ArticleViewSwitcher";

export { ArticleDetails, IArticle, IArticleDetailsSchema, getArticleDetailsData, ArticleView, ArticleViewSwitcher, ArticleList, ArticleType };
