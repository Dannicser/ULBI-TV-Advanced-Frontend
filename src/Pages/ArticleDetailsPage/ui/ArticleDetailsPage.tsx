import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { ArticleDetails } from "entities/Article";

import { articleDetailsCommentsReducer, getArticleComments } from "../model/slice/articleDetailsCommentsSlice";

import { CommentList } from "entities/Comment";

import { Text } from "shared/ui/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";

import { useSelector } from "react-redux";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import { AddCommentFormAsync } from "features/AddCommentForm";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";

import cls from "./ArticleDetailsPage.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

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

  const navigate = useNavigate();

  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const comments = useSelector(getArticleComments.selectAll); // прокачанный селектор благодаря entityAdapter (сами не пишем селекторы)

  if (!id) {
    return null;
  }

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, []);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, []);

  return (
    <DynamicModelLoader reducers={reducers} isRemoveAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          Назад
        </Button>
        <ArticleDetails id={id} />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <Text title="Комментарии" />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModelLoader>
  );
};

export default ArticleDetailsPage;
