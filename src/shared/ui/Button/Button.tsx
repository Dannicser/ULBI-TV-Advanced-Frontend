import { ButtonHTMLAttributes } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  OUTLINE = "outline",
}

export enum SizeButton {
  MEDIUM = "medium",
  LARGE = "large",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: SizeButton;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { className, children, theme = ThemeButton.CLEAR, size = SizeButton.MEDIUM, ...other } = props;

  return (
    <button {...other} className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}>
      {children}
    </button>
  );
};
