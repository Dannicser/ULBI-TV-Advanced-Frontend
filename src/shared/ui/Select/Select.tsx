import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Select.module.scss";
import { ReactElement, SelectHTMLAttributes, memo, useCallback, useMemo } from "react";

interface ISelectOptions {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options: ISelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: React.FC<ISelectProps> = memo((props) => {
  const { label, options, value, onChange, className, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cls.option} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value); // либо ?. либо условная конструкция
  };

  return (
    <div className={classNames(cls.Select, {}, [className])}>
      <div className={cls.label}>{label}</div>

      <select value={value} disabled={readonly} onChange={onChangeHandler} className={cls.select} name="" id="">
        {optionList}
      </select>
    </div>
  );
});
