import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ className, src, size, alt = "" }) => {
  return <img alt={alt} width={size} height={size} src={src} className={classNames(cls.Avatar, {}, [className])}></img>;
};
