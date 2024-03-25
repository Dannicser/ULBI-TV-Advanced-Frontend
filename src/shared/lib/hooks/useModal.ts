import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

interface IUseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export function useModal(props: IUseModalProps) {
  const { onClose, isOpen, animationDelay } = props;

  const [isMounted, setIsMounted] = useState(false); // вмонтирована модалка в дом или нет
  const [isClosing, setIsClosing] = useState(false);

  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // очень удобная конструкция, если не знаешь тип сущности

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  // каждый рендер новая функция!
  const close = useCallback(() => {
    setIsClosing(true);
    timeRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, animationDelay);
  }, [onClose]);

  // каждый рендер новая функция!
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key == "Escape") {
        close();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current); // чистим таймер!!!!
      window.removeEventListener("keydown", onKeyDown); // чистим слушатель!!!!
    };
  }, [isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
}
