import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Input.module.scss";

// Omit позволяет забрать из типа все пропсы, но исключить те, которые не нужны
type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface IInputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  isAutoFocus?: boolean;
}

export const Input: React.FC<IInputProps> = memo((props) => {
  const { className, type = "text", onChange, value, isAutoFocus = false, ...other } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAutoFocus) {
      ref.current?.focus();
    }
  }, [isAutoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value); // если прост value не передан, функция не вызовется
  };

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <input ref={ref} value={value} onChange={onChangeHandler} type={type} {...other} />
    </div>
  );
});
