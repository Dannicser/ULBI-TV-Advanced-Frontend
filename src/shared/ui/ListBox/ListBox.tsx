import { ReactNode } from "react";

import { Listbox } from "@headlessui/react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "../Button/Button";

import cls from "./ListBox.module.scss";

interface IListBoxItem {
  value: string;
  content: ReactNode;
  disabled: boolean;
}

type DropdownDirection = "top" | "bottom";

interface IListBoxProps {
  items: IListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: "",
  top: cls.optionsTop,
};

export default function MyListbox(props: IListBoxProps) {
  const { items, value, className, defaultValue, onChange, readonly = true, direction = "top", label } = props;

  return (
    <Listbox disabled={readonly} value={value} onChange={onChange} as={"div"} className={classNames(cls.ListBox, {}, [className])}>
      {label ? <div className={cls.label}>{label}</div> : null}
      <Listbox.Button className={cls.trigger}>
        <Button disabled={readonly}>{defaultValue}</Button>
      </Listbox.Button>
      <Listbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
        {items.map((item) => (
          <Listbox.Option key={item.value} value={item.value} disabled={item.disabled}>
            {({ active, disabled }) => {
              return (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.disabled]: disabled,
                    },
                    []
                  )}
                >
                  {item.content}
                </li>
              );
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
