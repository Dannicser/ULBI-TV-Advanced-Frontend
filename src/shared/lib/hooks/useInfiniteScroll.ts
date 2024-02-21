import { MutableRefObject, useEffect } from "react";

export interface IUseInfiniteScrollOptions {
  callback?: () => void; // вызывается при пересечении определенного элемента
  triggerRef: MutableRefObject<HTMLElement>; // обычный реактовский реф, когда его пересекаем, вызываем callback (за чем следим)
  wrapperRef: MutableRefObject<HTMLElement>; // элемент, внутри которого находится скролл (page, document)
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: IUseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const triggerElement = triggerRef;
    const wrapperElement = wrapperRef; // замыкаем тут, не работаем напрямую с рефом, может прилететь все что угодно, например null (данные сверху могут измениться и т.д, на момент демонтирования компонетна их может и не быть, поэтому сохраняем заранее)

    if (callback) {
      const options = {
        root: wrapperElement.current, // элемент в котором находится скролл
        rootMargin: "0px",
        threshold: 1.0,
      };

      //вызывается когда на экране появлился элемент (entries - массив элементов, за которыми мы наблюдаем)
      observer = new IntersectionObserver(([entry]) => {
        //отрабатывает единожды
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement.current); // за чем следим
    }
    return () => {
      // отписываемся при демонтировании компонента
      if (observer && triggerElement.current) {
        observer.unobserve(triggerElement.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
