import { MutableRefObject, ReactNode, UIEvent, memo, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import { StateSchema } from "@/app/providers/StoreProvider";
import { getScrollSaveByPath, scrollSaveActions } from "@/features/ScrollSave";

import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ITestProps } from "@/shared/types/tests";
import { useThrottle } from "@/shared/lib/hooks/useThrottle";

import cls from "./Page.module.scss";

interface IPageProps extends ITestProps {
  className?: string;
  onScrollEnd?: () => void;
  children: ReactNode;
}

export const PAGE_ID = "PAGE_ID";

export const Page: React.FC<IPageProps> = memo((props) => {
  const { className, children, onScrollEnd } = props;

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
    <main data-testid={props["data-testid"]} id={PAGE_ID} onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      {/* при достижении этого дива срабатывает callback - trigger */}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
