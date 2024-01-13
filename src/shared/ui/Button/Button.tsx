import { ButtonHTMLAttributes } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  OUTLINE = "outline",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = ({ className, children, theme = ThemeButton.CLEAR, ...other }) => {
  return (
    <button {...other} className={classNames(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};