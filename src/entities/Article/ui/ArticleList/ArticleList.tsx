import { HTMLAttributeAnchorTarget } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { ArticleView } from "../../model/consts/consts";

import { IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

import cls from "./ArticleList.module.scss";

interface IArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: IArticle[];
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  isVirtualized?: boolean;
}

export const ArticleList: React.FC<IArticleListProps> = (props) => {
  const { className, articles, view = ArticleView.SMALL, isLoading, target = "_self", isVirtualized = false } = props;

  const getSkeletons = () => {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  };

  const renderArticle = (article: IArticle) => {
    return <ArticleListItem key={article.id} target={target} className={cls.card} view={view} article={article} />;
  };

  if (!isVirtualized) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length ? articles.map((article) => renderArticle(article)) : null}
        {isLoading && getSkeletons()}
      </div>
    );
  }

  return null;
};
