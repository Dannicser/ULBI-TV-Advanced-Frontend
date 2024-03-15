import { memo, useCallback, useMemo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { ITabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/consts/consts";

import cls from "./ArticleTypeTabs.module.scss";

interface IArticleTypeTabsProps {
  className?: string;
  onChangeType: (type: ITabItem) => void;
  type: ArticleType;
}

export const ArticleTypeTabs: React.FC<IArticleTypeTabsProps> = memo(({ className, onChangeType, type }) => {
  const onTabClick = useCallback((tab: ITabItem) => {
    onChangeType(tab);
  }, []);

  const tabTypes = useMemo<ITabItem[]>(() => {
    return [
      {
        value: ArticleType.IT,
        content: "IT",
      },
      {
        value: ArticleType.SCIENCE,
        content: "SCIENCE",
      },
      {
        value: ArticleType.ALL,
        content: "ALL",
      },
    ];
  }, []);

  return (
    <div className={classNames(cls.ArticleTypeTabs, {}, [className])}>
      <Tabs onTabClick={onTabClick} value={type} className={cls.tabs} tabs={tabTypes} />
    </div>
  );
});
