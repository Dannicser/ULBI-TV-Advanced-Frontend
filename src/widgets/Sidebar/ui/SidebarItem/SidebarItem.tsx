import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/types/sidebar";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/User";

interface ISidebarItemProps {
  item: SidebarItemType;
}

//мемо не перерисовывает при одинаковых пропсах

export const SidebarItem: React.FC<ISidebarItemProps> = memo(({ item }) => {
  const { t, i18n } = useTranslation();

  const isAuth = useSelector(getAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={classNames(cls.SidebarItem, {}, [])}>
      <AppLink key={item.path} theme={AppLinkTheme.SECONDARY} className={cls.main} to={item.path}>
        <span className={""}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
