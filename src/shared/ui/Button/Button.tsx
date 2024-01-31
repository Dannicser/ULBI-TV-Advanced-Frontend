import { ButtonHTMLAttributes, memo } from "react";

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
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = memo((props) => {
  const { className, children, theme = ThemeButton.CLEAR, size = SizeButton.MEDIUM, disabled = false, ...other } = props;

  return (
    <button {...other} disabled={disabled} className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme], cls[size]])}>
      {children}
    </button>
  );
});
