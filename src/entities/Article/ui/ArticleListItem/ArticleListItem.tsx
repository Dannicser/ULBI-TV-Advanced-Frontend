import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticleListItem.module.scss";
import { ArticleBlockType, ArticleView, IArticle, IArticleTextBlock } from "../../../Article/model/types/article";
import { Text } from "shared/ui/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: ArticleView;
}

export const ArticleListItem: React.FC<IArticleListItemProps> = (props) => {
  const { className, article, view } = props;

  const onOpenArticle = useCallback(() => {
    nagigate(RoutePath.acticle_details + article.id);
  }, []);

  const nagigate = useNavigate();

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
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              Читать далее
            </Button>
            <Text text={"Просмотров - " + article.views.toString()} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onOpenArticle} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
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
    </div>
  );
};
