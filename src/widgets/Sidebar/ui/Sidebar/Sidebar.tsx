import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

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
      <button data-testid="sidebar-toggle" onClick={toggle}>
        {t("Open")}
      </button>
    </div>
  );
};
