import { ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Popover as HPopover } from "@headlessui/react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./HPopover.module.scss";

interface IHPopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover: React.FC<IHPopoverProps> = ({ className, trigger, children }) => {
  const { t, i18n } = useTranslation();

  return (
    <HPopover className={cls.Pupover}>
      <HPopover.Button className={cls.btn}>{trigger}</HPopover.Button>

      <HPopover.Panel as={"ul"} className={classNames(cls.list, {}, [cls.bottomLeft])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
