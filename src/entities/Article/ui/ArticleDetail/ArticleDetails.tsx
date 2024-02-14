import { useSelector } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";

import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from "entities/Article/model/selectors/getArticleDetails";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";

import cls from "./ArticleDetails.module.scss";
import { Text, ThemeText } from "shared/ui/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { ArticleBlockType, IArticleBlock } from "entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImgBlockComponent } from "../ArticleImgBlockComponent/ArticleImgBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface IArticleDetailProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<IArticleDetailProps> = memo(({ className, id }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: IArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;

      case ArticleBlockType.IMAGE:
        return <ArticleImgBlockComponent key={block.id} block={block} />;

      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;

      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={50} height={50} borderRadius={"50%"} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  } else if (error) {
    content = <Text theme={ThemeText.ERROR} title={"Произошла ошибка"} />;
  } else {
    content = (
      <>
        <div className={cls.ava}>
          <Avatar size={200} src={article?.img} />{" "}
        </div>
        <Text title={article?.title} text={article?.subtitle} />
        <Text title="Количество просмотров" text={article?.views.toString()} />
        <Text title="Дата создания" text={article?.createdAt} />
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModelLoader>
  );
});
