import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import { Page } from "@/widgets/Page/Page";

import cls from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<INotFoundPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <Page data-testid={"NotFoundPage"} className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("NotFound")}
    </Page>
  );
};
