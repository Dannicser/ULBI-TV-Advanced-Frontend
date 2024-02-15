import { classNames } from "shared/lib/classNames/classNames";

import cls from "./CommentList.module.scss";
import { IComment } from "../../../Comment/model/types/comment";
import { Text } from "shared/ui/Text";
import { CommentItem } from "../CommentItem/CommentItem";

interface ICommentListProps {
  className?: string;
  comments: IComment[];
  isLoading?: boolean;
  error?: string;
}

export const CommentList: React.FC<ICommentListProps> = ({ className, comments, isLoading }) => {
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => <CommentItem key={comment.id} isLoading={isLoading} className={cls.comment} comment={comment} />)
      ) : (
        <Text text={"Нет комментариев"} />
      )}
    </div>
  );
};
