import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  function toggle() {
    return setIsCollapsed((prev) => !prev);
  }

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}>
      <Button size={SizeButton.LARGE} theme={ThemeButton.PRIMARY} className={cls.isCollapsedBtn} data-testid="sidebar-toggle" onClick={toggle}>
        {t(isCollapsed ? ">" : "<")}
      </Button>

      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.main} to={RoutePath.main}>
          <span className={""}>{t("Main")}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.about} to={RoutePath.about}>
          <span className={""}>{t("About")}</span>
        </AppLink>
      </div>
    </div>
  );
};
