import { MutableRefObject, useCallback, useRef } from "react";

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef(null) as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      console.log("clear");
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      console.log("create");
      callback(...args);
    }, delay);
  }, []);
}

// вбивая текст в инпут, мы постоянно чистим таймер, не давая ему вызваться
