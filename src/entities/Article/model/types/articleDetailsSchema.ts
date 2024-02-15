import { IArticle } from "./article";

export interface IArticleDetailsSchema {
  isLoading?: boolean;
  error?: string;
  data?: IArticle;
}
