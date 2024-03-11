import { memo } from "react";

import { useTranslation } from "react-i18next";

import { useArticleRecommendationsList } from "../../../ArticleRecommendationsList/api/articleRecommendationsApi";

import { ArticleList } from "entities/Article";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack/VStack/VStack";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  //можно переопределять названия
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <VStack align="start" gap="8" className={classNames("", {}, [className])}>
      <Text title="Рекомендуем" />
      <ArticleList target="_blank" className={""} articles={articles} isLoading={false} />
    </VStack>
  );
});
