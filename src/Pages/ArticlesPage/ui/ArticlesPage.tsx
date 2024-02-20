import { ArticleList, ArticleView, ArticleViewSwitcher } from "entities/Article";

import { classNames } from "shared/lib/classNames/classNames";

import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { articlePageSlice, articlesPageActions, articlesPageReducer, getArticles } from "../model/slice/articlePageSlice";

import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticlesList } from "../model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import { getArticlesPageLoading, getArticlesPageView } from "../model/selectors/getArticlePageSelectors/getArticlePageSelectors";

import cls from "./ArticlesPage.module.scss";

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

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.setInit());
  }, []);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModelLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSwitcher onChangeView={onChangeView} view={view} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModelLoader>
  );
};

export default ArticlesPage;
