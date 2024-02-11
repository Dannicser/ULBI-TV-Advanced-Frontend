import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticleDetailsPage.module.scss";

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>Article Detail</div>;
};

export default ArticleDetailsPage;
