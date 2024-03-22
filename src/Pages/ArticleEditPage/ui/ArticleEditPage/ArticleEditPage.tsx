import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import { Page } from "@/widgets/Page/Page";

import { useParams } from "react-router-dom";

import cls from "./ArticleEditPage.module.scss";

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: React.FC<IArticleEditPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return <Page className={classNames(cls.ArticleEditPage, {}, [className])}>{isEdit ? "Редактировать статью" : "Создать новую статью"}</Page>;
};

export default ArticleEditPage;
