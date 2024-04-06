import { ImgHTMLAttributes, ReactElement, ReactNode, useLayoutEffect, useState } from "react";

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage: React.FC<IAppImageProps> = ({ className, src, fallback, errorFallback, ...otherProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  //вызывается до монтирования компонента

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? "";

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (isError && errorFallback) {
    return errorFallback;
  }

  return (
    <>
      <img {...otherProps} src={src} className={className} />
    </>
  );
};
