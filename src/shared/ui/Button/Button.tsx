import { ButtonHTMLAttributes, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  PRIMARY = "primary",
  OUTLINE = "outline",
  DANGER = "danger",
}

export enum SizeButton {
  MEDIUM = "medium",
  LARGE = "large",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  size?: SizeButton;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<IButtonProps> = memo((props) => {
  const { className, children, theme = ThemeButton.CLEAR, size = SizeButton.MEDIUM, fullWidth, disabled = false, ...other } = props;

  return (
    <button
      {...other}
      disabled={disabled}
      className={classNames(cls.Button, { [cls.disabled]: disabled, [cls.fullWith]: fullWidth }, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  );
});
