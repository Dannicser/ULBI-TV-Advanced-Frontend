import { ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLink } from "../AppLink/AppLink";

import { To } from "react-router-dom";

import cls from "./Dropdown.module.scss";

interface IDropDownItem {
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: To;
}

interface IMyDropdownProps {
  className?: string;
  items: IDropDownItem[];
  trigger: ReactNode;
  direction: DropDownDirection;
}

type DropDownDirection = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

const mapDirectionClass: Record<DropDownDirection, string> = {
  topLeft: cls.topLeft,
  topRight: cls.topRight,
  bottomLeft: cls.bottomLeft,
  bottomRight: cls.bottomRight,
};

export function Dropdown(props: IMyDropdownProps) {
  const { className, items, trigger, direction } = props;

  return (
    <Menu as={"div"} className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
        {items.map((item, i) => {
          const content = ({ active }: { active: boolean }) => {
            return (
              <button
                className={classNames(
                  cls.itemBtn,
                  {
                    [cls.active]: active,
                  },
                  []
                )}
              >
                {item.content}
              </button>
            );
          };

          if (item.href) {
            return (
              <Menu.Item key={i} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={i} as={"li"} onClick={item.onClick} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
