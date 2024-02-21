import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NotFoundPage.module.scss";
import { Page } from "shared/ui/Page/Page";

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<INotFoundPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return <Page className={classNames(cls.NotFoundPage, {}, [className])}>{t("NotFound")}</Page>;
};
