import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Flex.module.scss";
import { ReactNode } from "react";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

//мапперы
const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export interface IFlexProps {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  children: ReactNode;
  max?: boolean;
}

export const Flex: React.FC<IFlexProps> = (props) => {
  const { className, children, justify = "start", align = "center", direction = "row", gap = "4", max = false } = props;

  const classes = [className, justifyClasses[justify], alignClasses[align], directionClasses[direction], gapClasses[gap]];

  const mods = {
    [cls.max]: max,
  };

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>;
};
