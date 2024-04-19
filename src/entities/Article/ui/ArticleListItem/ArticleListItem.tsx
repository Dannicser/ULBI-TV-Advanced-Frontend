import { classNames } from "@/shared/lib/classNames/classNames";

import { IArticle, IArticleTextBlock } from "../../../Article/model/types/article";
import { Text } from "@/shared/ui/Text";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HTMLAttributeAnchorTarget } from "react";

import { Link } from "react-router-dom";

import { ArticleBlockType, ArticleView } from "../../model/consts/consts";

import cls from "./ArticleListItem.module.scss";
import { getRouteArticleDetails } from "@/app/router/config/routeConfig";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: React.FC<IArticleListItemProps> = (props) => {
  const { className, article, view, target = "_self" } = props;

  if (view === ArticleView.BIG) {
    const text = article.blocks.find((block) => {
      if (block.type === ArticleBlockType.TEXT) {
        return block;
      }
    }) as IArticleTextBlock;

    return (
      <div data-testid={"ArticleListItem"} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.card}>
          <div className={cls.header}>{article.createdAt}</div>
          <Text className={cls.types} text={article.type.join(" ")} />

          <AppImage fallback={<Skeleton />} src={article.img} />

          {text && <ArticleTextBlockComponent className={cls.textBlock} block={text} />}

          <hr className={cls.hr} />

          <div className={cls.footer}>
            <Link target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme={ThemeButton.OUTLINE}>Читать далее</Button>
            </Link>
            <Text text={"Просмотров - " + article.views.toString()} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      data-testid={"ArticleListItem"}
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <div className={cls.card}>
        <div className={cls.imgWrapper}>
          <AppImage fallback={<Skeleton />} src={article.img} alt="" />
          <Text className={cls.date} text={article.createdAt} />
        </div>
        <div className={cls.infoWrapper}>
          <Text className={cls.types} text={article.type.join(" ")} />
          <Text text={"Просмотров - " + article.views.toString()} />
        </div>
        <Text className={cls.title} title={article.title} />
      </div>
    </Link>
  );
};
