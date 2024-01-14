import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ErrorPage.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IErrorPageProps {
  className?: string;
}

export const ErrorPage: React.FC<IErrorPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  function reload() {
    return location.reload();
  }

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <h2 className={cls.title}>{t("ErrorBoundary")}</h2>

      <Button onClick={reload} theme={ThemeButton.CLEAR}>
        Обновить страницу
      </Button>
    </div>
  );
};
