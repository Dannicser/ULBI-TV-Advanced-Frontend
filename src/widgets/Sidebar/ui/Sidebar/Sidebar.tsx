import { useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Sidebar.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  function toggle() {
    return setIsCollapsed((prev) => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}>
      <button onClick={toggle}>Открыть</button>
    </div>
  );
};
