import { useCallback, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import { Page } from "@/widgets/Page/Page";

import { DynamicModelLoader, ReducersList } from "@/shared/lib/components/DynamicModelLoader";
import { articlesPageReducer } from "../../model/slice/articlePageSlice";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";

import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

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

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, []);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModelLoader isRemoveAfterUnmount={false} reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModelLoader>
  );
};

export default ArticlesPage;
