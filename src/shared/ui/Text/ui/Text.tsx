import { classNames } from "@/shared/lib/classNames/classNames";

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
  size?: TextSize;
}

export enum TextSize {
  S = "size_s",
  M = "size_m",
  l = "size_l",
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.l]: "h1",
};

export const Text: React.FC<ITextProps> = (props) => {
  const { title, text, className, theme = ThemeText.PRIMERY, align = AlignText.LEFT, size = TextSize.M } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
