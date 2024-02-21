import { classNames } from "shared/lib/classNames/classNames";

import { ArticleView, IArticle } from "entities/Article/model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import cls from "./ArticleList.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface IArticleListProps {
  className?: string;
  isLoading?: boolean;
  articles: IArticle[];
  view?: ArticleView;
}

export const ArticleList: React.FC<IArticleListProps> = (props) => {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;

  const renderArticle = (article: IArticle) => {
    return <ArticleListItem key={article.id} className={cls.card} view={view} article={article} />;
  };

  const getSkeletons = () => {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  };

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map((article) => renderArticle(article)) : null}
      {isLoading && getSkeletons()}
      {/* для бесконечноц ленты нужно изменять ui только внутри, без if, иначе триггер элемент будет прыгать и хоатично работать*/}
    </div>
  );
};
