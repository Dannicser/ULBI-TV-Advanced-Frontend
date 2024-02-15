import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { ArticleDetails } from "entities/Article";

import { articleDetailsCommentsReducer, getArticleComments } from "../model/slice/articleDetailsCommentsSlice";

import { CommentList } from "entities/Comment";

import { Text } from "shared/ui/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";

import cls from "./ArticleDetailsPage.module.scss";
import { useSelector } from "react-redux";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const comments = useSelector(getArticleComments.selectAll); // прокачанный селектор благодаря entityAdapter (сами не пишем селекторы)

  if (!id) {
    return null;
  }

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, []);

  return (
    <DynamicModelLoader reducers={reducers} isRemoveAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title="Комментарии" />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModelLoader>
  );
};

//39:00

export default ArticleDetailsPage;
