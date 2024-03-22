import { HTMLAttributeAnchorTarget, useCallback } from "react";
//

import { List, ListRowProps, WindowScroller } from "react-virtualized";

//
import { classNames } from "@/shared/lib/classNames/classNames";

import { ArticleView } from "../../model/consts/consts";

import { IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import { PAGE_ID } from "@/widgets/Page/Page";

import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

import { Text } from "@/shared/ui/Text";

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

  //---------------------------------

  const isBig = view === ArticleView.BIG;
  const itemsPerRow = isBig ? 1 : 3; // тут желательно расчитать (не просто 3 в плитке)
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow); // кол строк

  //фукнция срабатывает на рендер каждого row
  const rowRender = useCallback(
    ({ index, key, style }: ListRowProps) => {
      const items = [];

      //от какого до какого рендерим

      const fromIndex = index + itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      for (let i = fromIndex; i < toIndex; i++) {
        items.push(<ArticleListItem key={i} target={target} className={cls.card} view={view} article={articles[index]} />);
      }

      return (
        <div className={cls.row} key={key} style={style}>
          {items}
        </div>
      );
    },
    [articles]
  );

  if (!articles.length && !isLoading) {
    return <Text title={"Статьи не найдены"} />;
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({ height, width, registerChild, scrollTop, isScrolling, onChildScroll }) => {
        return (
          //@ts-ignore
          <div ref={registerChild} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <List
              scrollTop={scrollTop}
              autoHeight
              isScrolling={isScrolling}
              height={height}
              width={width - 70}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 400}
              rowRenderer={rowRender}
              onScroll={onChildScroll}
            />
            {isLoading && getSkeletons()}
          </div>
        );
      }}
    </WindowScroller>
  );
};
