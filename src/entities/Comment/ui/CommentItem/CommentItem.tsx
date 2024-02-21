import { classNames } from "shared/lib/classNames/classNames";

import { IComment } from "entities/Comment/model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text";

import cls from "./CommentItem.module.scss";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ICommentItemProps {
  className?: string;
  comment: IComment;
  isLoading?: boolean;
}

export const CommentItem: React.FC<ICommentItemProps> = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        <Avatar src={comment.user.avatar} size={50} />
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
};