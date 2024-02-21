import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Page.module.scss";
import { MutableRefObject, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: React.FC<IPageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} /> {/* при достижении этого дива срабатывает callback - trigger */}
    </section>
  );
};
