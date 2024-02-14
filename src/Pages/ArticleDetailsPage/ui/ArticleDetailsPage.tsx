import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { ArticleDetails } from "entities/Article";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticleDetailsPage.module.scss";

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;
