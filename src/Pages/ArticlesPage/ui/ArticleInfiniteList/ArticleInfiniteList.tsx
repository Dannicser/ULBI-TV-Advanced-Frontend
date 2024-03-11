import { useTranslation } from "react-i18next";

import { getArticlesPageLoading, getArticlesPageView } from "../../model/selectors/getArticlePageSelectors/getArticlePageSelectors";

import { classNames } from "shared/lib/classNames/classNames";

import { useSelector } from "react-redux";
import { getArticles } from "pages/ArticlesPage/model/slice/articlePageSlice";

import { ArticleList } from "entities/Article";

interface IArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: React.FC<IArticleInfiniteListProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);

  const isLoading = useSelector(getArticlesPageLoading);

  return (
    <div className={classNames("", {}, [className])}>
      <ArticleList isLoading={isLoading} view={view} articles={articles} />
    </div>
  );
};
