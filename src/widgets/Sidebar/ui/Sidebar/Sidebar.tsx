import { useMemo, useState } from "react";

import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";

import { Button, SizeButton, ThemeButton } from "@/shared/ui/Button/Button";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import { getSidebarItems } from "@/widgets/Sidebar/model/selectors/getSidebarItems";

import { VStack } from "@/shared/ui/Stack/VStack/VStack";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const SidebarItemsList = useSelector(getSidebarItems);

  const { t, i18n } = useTranslation();

  function toggle() {
    return setIsCollapsed((prev) => !prev);
  }

  // предотвращение перерисовки через useMemo

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((el) => <SidebarItem key={el.path} item={el} />);
  }, [SidebarItemsList]);

  return (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}>
      <Button data-testid={"sidebar-button"} size={SizeButton.LARGE} theme={ThemeButton.PRIMARY} className={cls.isCollapsedBtn} onClick={toggle}>
        {t(isCollapsed ? ">" : "<")}
      </Button>

      <VStack role="navigation" className={cls.items} align="start" gap="8">
        {itemsList}
      </VStack>
    </aside>
  );
};
