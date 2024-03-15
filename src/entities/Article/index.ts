import { ArticleView, ArticleType, ArticleSortField } from "./model/consts/consts";
import { IArticle } from "./model/types/article";
import { IArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { ArticleDetails } from "./ui/ArticleDetail/ArticleDetails";

import { getArticleDetailsData } from "./model/selectors/getArticleDetails";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import { ArticleViewSwitcher } from "./ui/ArticleViewSwitcher/ArticleViewSwitcher";
import { ArticleSortSelector } from "./ui/ArticleSortSelector/ArticleSortSelector";
import { ArticleTypeTabs } from "./ui/ArticleTypeTabs/ArticleTypeTabs";

export {
  ArticleDetails,
  getArticleDetailsData,
  ArticleView,
  ArticleViewSwitcher,
  ArticleList,
  ArticleType,
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
};

export type { IArticle, IArticleDetailsSchema };
