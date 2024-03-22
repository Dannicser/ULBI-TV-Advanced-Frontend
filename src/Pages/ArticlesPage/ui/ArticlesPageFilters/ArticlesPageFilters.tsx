import { useSelector } from "react-redux";

import { useCallback } from "react";

import { ArticleSortField, ArticleType, ArticleView, ArticleViewSwitcher } from "@/entities/Article";

import { articlesPageActions } from "../../model/slice/articlePageSlice";

import {
  getArticlesPageFieldSort,
  getArticlesPageOrder,
  getArticlesPageSearchText,
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/getArticlePageSelectors/getArticlePageSelectors";

import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";

import { ArticleSortSelector } from "@/entities/Article";
import { ArticleTypeTabs } from "@/entities/Article";

import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { ITabItem } from "@/shared/ui/Tabs/Tabs";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Input } from "@/shared/ui/Input/Input";

import cls from "./ArticlesPageFilters.module.scss";

interface IArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: React.FC<IArticlesPageFiltersProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);

  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageFieldSort);
  const search = useSelector(getArticlesPageSearchText);

  const type = useSelector(getArticlesPageType);

  const fetchData = () => {
    dispatch(fetchArticlesList({ isReplace: true }));
  };

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  //сделай таб дженер компонентом
  const onChangeType = useCallback(
    (tab: ITabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch]
  );

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.filters}>
        <ArticleSortSelector onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} order={order} sort={sort} />
        <ArticleViewSwitcher onChangeView={onChangeView} view={view} />
      </div>
      <ArticleTypeTabs className={cls.tabs} type={type} onChangeType={onChangeType} />
      <Input onChange={onChangeSearch} value={search} className={cls.search} />
    </div>
  );
};
