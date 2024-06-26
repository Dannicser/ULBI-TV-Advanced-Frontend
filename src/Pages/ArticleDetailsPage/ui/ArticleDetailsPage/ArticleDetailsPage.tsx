import { useParams } from "react-router-dom";

import { ArticleDetails } from "@/entities/Article";

import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "@/shared/lib/components/DynamicModelLoader";

import { Page } from "@/widgets/Page/Page";

import { articleDetailsPageReducer } from "../../model/slice";

import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { ArticleRatingAsync } from "@/features/ArticleRating";

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

import { ArticleDetailsComment } from "../ArticleDetailsComment/ArticleDetailsComment";

import cls from "./ArticleDetailsPage.module.scss";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModelLoader reducers={reducers} isRemoveAfterUnmount>
      <Page data-testid={"ArticleDetailsPage"} className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecommendationsList />
        <ArticleRatingAsync id={id} />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModelLoader>
  );
};

export default ArticleDetailsPage;
