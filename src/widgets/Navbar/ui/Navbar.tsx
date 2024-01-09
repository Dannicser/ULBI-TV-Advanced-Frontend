import { RoutePath } from "shared/config/routeConfig/routeConfig";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.main} to={RoutePath.main}>
          <span className={""}>{t("Main")}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.about} to={RoutePath.about}>
          <span className={""}>{t("About")}</span>
        </AppLink>
      </div>
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
