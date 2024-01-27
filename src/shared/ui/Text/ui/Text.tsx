import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Text.module.scss";

export enum ThemeText {
  PRIMERY = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
}

export const Text: React.FC<ITextProps> = (props) => {
  const { title, text, className, theme = ThemeText.PRIMERY } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
