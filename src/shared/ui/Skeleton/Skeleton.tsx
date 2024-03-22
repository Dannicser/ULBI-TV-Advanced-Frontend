import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Skeleton.module.scss";
import { CSSProperties } from "react";

interface ISkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { className, height, width, borderRadius } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div style={styles} className={classNames(cls.Skeleton, {}, [className])}></div>;
};
