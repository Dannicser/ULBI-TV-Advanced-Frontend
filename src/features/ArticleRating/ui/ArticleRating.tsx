import { useCallback } from "react";
import { useSelector } from "react-redux";

import { RatingCard } from "@/entities/RatingCard";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useArticleRate, useArticleRating } from "../model/api/articleRatingApi";

import { getAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface IArticleRatingProps {
  className?: string;
  id: string;
}

const ArticleRating: React.FC<IArticleRatingProps> = ({ className, id }) => {
  const user = useSelector(getAuthData);

  const { data, isLoading } = useArticleRating({ userId: user?.id, articleId: id });
  const [rateArticleMutation] = useArticleRate();

  const rating = data?.[0];

  const handleArticleRate = (starsCount: number, feedback?: string) => {
    rateArticleMutation({ userId: user?.id, articleId: id, rate: starsCount, feedback });
  };

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleArticleRate(starsCount, feedback);
  }, []);

  const onCancel = useCallback((starsCount: number) => {
    handleArticleRate(starsCount);
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      hasFeedBack
      rate={rating?.rate}
      feedbackTitle={"Что думаете о статье?"}
      title={rating?.rate ? "Спасибо за оценку" : "Оставьте отзыв о статье"}
      className={classNames("", {}, [className])}
    ></RatingCard>
  );
};

export default ArticleRating;
