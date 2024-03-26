import { createSelector } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "@/entities/Article";
import { getAuthData } from "@/entities/User";

export const getCanUserEditArticle = createSelector(getArticleDetailsData, getAuthData, (article, user) => {
  if (!article || !user) {
    return false;
  }

  return article.userId === user.id;
});
