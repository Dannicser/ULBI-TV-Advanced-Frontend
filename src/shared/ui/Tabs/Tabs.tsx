import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Tabs.module.scss";

export interface ITabItem {
  value: string;
  content: React.ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: ITabItem[];
  value?: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs: React.FC<ITabsProps> = memo(({ className, tabs, onTabClick }) => {
  const { t, i18n } = useTranslation();

  // очень удобное замыкание в циклах для проброса значения
  const clickHandle = (tab: ITabItem) => (e: any) => {
    onTabClick(tab);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((el) => {
        return (
          <div className={cls.item} onClick={clickHandle(el)} key={el.value}>
            {el.content}
          </div>
        );
      })}
    </div>
  );
});
