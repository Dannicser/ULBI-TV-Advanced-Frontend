import { classNames } from "@/shared/lib/classNames/classNames";

import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton/Skeleton";

import cls from "./Avatar.module.scss";

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ className, src, size, alt = "" }) => {
  return (
    <AppImage
      fallback={<Skeleton height={"100%"} borderRadius={"60%"} />}
      alt={alt}
      width={size}
      height={size}
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
