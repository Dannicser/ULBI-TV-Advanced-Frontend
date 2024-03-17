import { ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Popover } from "@headlessui/react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./HPopover.module.scss";

interface IHPopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
}

export const HPopover: React.FC<IHPopoverProps> = ({ className, trigger, children }) => {
  const { t, i18n } = useTranslation();

  return (
    <Popover className={cls.Pupover}>
      <Popover.Button className={cls.btn}>{trigger}</Popover.Button>

      <Popover.Panel as={"ul"} className={cls.list}>
        {children}
      </Popover.Panel>
    </Popover>
  );
};
