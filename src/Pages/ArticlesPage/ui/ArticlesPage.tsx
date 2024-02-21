import { ArticleList, ArticleView, ArticleViewSwitcher } from "entities/Article";

import { classNames } from "shared/lib/classNames/classNames";

import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { articlesPageActions, articlesPageReducer, getArticles } from "../model/slice/articlePageSlice";

import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import {
  getArticlesPageCount,
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPageView,
} from "../model/selectors/getArticlePageSelectors/getArticlePageSelectors";

import cls from "./ArticlesPage.module.scss";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticlesPage } from "../model/services/fetchNextArticlesPage/fetchNextArticlesPage";

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<IArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);

  const isLoading = useSelector(getArticlesPageLoading);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(articlesPageActions.setInit());
    dispatch(fetchArticlesList({ page: 1 }));
  }, []);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModelLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSwitcher onChangeView={onChangeView} view={view} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModelLoader>
  );
};

export default ArticlesPage;
