import { RoutePath } from "shared/config/routeConfig/routeConfig";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.main} to={RoutePath.main}>
          <span className={""}>Main</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.about} to={RoutePath.about}>
          <span className={""}>About</span>
        </AppLink>
      </div>

      <ThemeSwitcher />
    </div>
  );
};
