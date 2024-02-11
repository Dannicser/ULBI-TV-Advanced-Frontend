import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ArticlesPage.module.scss";

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<IArticlesPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return <div className={classNames(cls.ArticlesPage, {}, [className])}>ArticlesPage</div>;
};

export default ArticlesPage;
