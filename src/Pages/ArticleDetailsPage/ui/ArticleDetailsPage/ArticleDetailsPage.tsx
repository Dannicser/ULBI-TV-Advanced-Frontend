import { useNavigate, useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { ArticleDetails, ArticleList } from "entities/Article";

import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";

import { CommentList } from "entities/Comment";

import { Text } from "shared/ui/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";

import { useSelector } from "react-redux";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import { AddCommentFormAsync } from "features/AddCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";

import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/Page";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { getArticleRecommendations } from "../../model/slice/articleDetailsRecommendationSlice";

import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  //
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isRecommendationsLoading = useSelector(getArticleRecommendationsIsLoading);
  //

  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const comments = useSelector(getArticleComments.selectAll); // прокачанный селектор благодаря entityAdapter (сами не пишем селекторы)

  if (!id) {
    return null;
  }

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, []);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, []);

  return (
    <DynamicModelLoader reducers={reducers} isRemoveAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text title="Рекомендуем" />
        <ArticleList target="_blank" className={cls.recommendations} articles={recommendations} isLoading={isRecommendationsLoading} />
        <Text title="Комментарии" />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </Page>
    </DynamicModelLoader>
  );
};

export default ArticleDetailsPage;
