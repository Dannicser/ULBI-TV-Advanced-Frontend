import { useMemo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Select.module.scss";

export interface ISelectOptions<T extends string> {
  value: T;
  content: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options: ISelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

// пример дженерик компонента

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const { label, options, value, onChange, className, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cls.option} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T); // либо ?. либо условная конструкция
  };

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      <div className={cls.label}>{label}</div>

      <select value={value} disabled={readonly} onChange={onChangeHandler} className={cls.select} name="" id="">
        {optionList}
      </select>
    </div>
  );
};
