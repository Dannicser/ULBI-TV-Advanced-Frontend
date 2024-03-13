import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { AddCommentFormAsync } from "features/AddCommentForm";

import { Text } from "shared/ui/Text";

import { CommentList } from "entities/Comment";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { getArticleCommentsError, getArticleCommentsIsLoading } from "../../model/selectors/comments/comments";

import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface IArticleDetailsCommentProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComment: React.FC<IArticleDetailsCommentProps> = ({ className, id }) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);

  const comments = useSelector(getArticleComments.selectAll); // прокачанный селектор благодаря entityAdapter (сами не пишем селекторы)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, []);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, []);

  return (
    <div className={classNames("", {}, [className])}>
      <Text title="Комментарии" />
      <AddCommentFormAsync onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
};
