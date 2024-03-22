import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./PageLoader.module.scss";

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <div className={cls.loader}></div>
    </div>
  );
};
