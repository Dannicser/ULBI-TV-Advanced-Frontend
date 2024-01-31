import { useMemo, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";

import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  function toggle() {
    return setIsCollapsed((prev) => !prev);
  }

  // предотвращение перерисовки через useMemo

  // const itemsList = useMemo(() => {
  //   return SidebarItemsList.map((el) => <SidebarItem item={el} />);
  // }, []);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}>
      <Button data-testid={"sidebar-button"} size={SizeButton.LARGE} theme={ThemeButton.PRIMARY} className={cls.isCollapsedBtn} onClick={toggle}>
        {t(isCollapsed ? ">" : "<")}
      </Button>

      <div className={cls.items}>
        {SidebarItemsList.map((el) => (
          <SidebarItem key={el.path} item={el} />
        ))}
      </div>
    </div>
  );
};
