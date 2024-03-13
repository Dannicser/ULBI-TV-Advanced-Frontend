import { classNames } from "shared/lib/classNames/classNames";

import { MutableRefObject, ReactNode, UIEvent, memo, useEffect, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getScrollSaveByPath, scrollSaveActions } from "features/ScrollSave";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useLocation } from "react-router-dom";
import { useThrottle } from "shared/lib/hooks/useThrottle";

import cls from "./Page.module.scss";

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
  children: ReactNode;
}

export const PAGE_ID = "PAGE_ID";

export const Page: React.FC<IPageProps> = memo(({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const dispatch = useAppDispatch();

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    const position = event.currentTarget.scrollTop;

    dispatch(scrollSaveActions.setScrollPosition({ position, path: pathname }));
  }, 500);

  //

  useInfiniteScroll({ callback: onScrollEnd, wrapperRef, triggerRef });

  return (
    <main id={PAGE_ID} onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      {/* при достижении этого дива срабатывает callback - trigger */}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
