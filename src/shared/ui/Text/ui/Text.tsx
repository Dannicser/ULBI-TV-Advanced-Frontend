import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Text.module.scss";

export enum AlignText {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export enum ThemeText {
  PRIMERY = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
  align?: AlignText;
}

export const Text: React.FC<ITextProps> = (props) => {
  const { title, text, className, theme = ThemeText.PRIMERY, align = AlignText.LEFT } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
