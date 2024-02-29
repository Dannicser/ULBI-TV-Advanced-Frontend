import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "entities/Comment";

export interface IArticleDetailsCommentsSchema extends EntityState<IComment> {
  isLoading?: boolean;
  error?: string;
}

// это добавляется при наследовании от EntityState<Сущность>
// ids: string[];
// entities: Record<any, any>;
