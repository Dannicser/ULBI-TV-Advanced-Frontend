import { useCallback, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { ArticleList } from "entities/Article";

import { classNames } from "shared/lib/classNames/classNames";

import { Page } from "widgets/Page/Page";

import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { articlesPageReducer, getArticles } from "../../model/slice/articlePageSlice";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { useSelector } from "react-redux";
import { getArticlesPageLoading, getArticlesPageView } from "../../model/selectors/getArticlePageSelectors/getArticlePageSelectors";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import cls from "./ArticlesPage.module.scss";

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<IArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);

  const isLoading = useSelector(getArticlesPageLoading);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, []);

  return (
    <DynamicModelLoader isRemoveAfterUnmount={false} reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModelLoader>
  );
};

export default ArticlesPage;
