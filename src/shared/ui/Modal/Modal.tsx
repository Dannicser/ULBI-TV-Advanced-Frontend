import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Modal.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";

interface IModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<IModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>(); // очень удобная конструкция, если не знаешь тип сущности

  function onContentClick(event: React.MouseEvent) {
    // предотвращает всплытие
    event.stopPropagation();
  }

  // каждый рендер новая функция!
  const onCloseHandler = useCallback(() => {
    setIsClosing(true);
    timeRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  // каждый рендер новая функция!
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key == "Escape") {
        onCloseHandler();
      }
    },
    [onCloseHandler]
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

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Modal, { [cls.opened]: isOpen, [cls.isClosing]: isClosing }, [className])}>
        <div onClick={onCloseHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
