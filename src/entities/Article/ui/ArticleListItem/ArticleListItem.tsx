import { classNames } from "shared/lib/classNames/classNames";

import { ArticleBlockType, ArticleView, IArticle, IArticleTextBlock } from "../../../Article/model/types/article";
import { Text } from "shared/ui/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { HTMLAttributeAnchorTarget } from "react";

import { RoutePath } from "shared/config/routeConfig/routeConfig";

import { Link } from "react-router-dom";

import cls from "./ArticleListItem.module.scss";

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
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.card}>
          <div className={cls.header}>{article.createdAt}</div>
          <Text className={cls.types} text={article.type.join(" ")} />

          <img src={article.img} alt="" />

          {text && <ArticleTextBlockComponent className={cls.textBlock} block={text} />}

          <hr className={cls.hr} />

          <div className={cls.footer}>
            <Link target={target} to={RoutePath.acticle_details + article.id}>
              <Button theme={ThemeButton.OUTLINE}>Читать далее</Button>
            </Link>
            <Text text={"Просмотров - " + article.views.toString()} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link target={target} to={RoutePath.acticle_details + article.id} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div className={cls.card}>
        <div className={cls.imgWrapper}>
          <img src={article.img} alt="" />
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
