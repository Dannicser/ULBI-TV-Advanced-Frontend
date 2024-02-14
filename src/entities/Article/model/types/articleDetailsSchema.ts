import { IArticle } from "./article";

export interface IActicleDetailsSchema {
  isLoading?: boolean;
  error?: string;
  data?: IArticle;
}
