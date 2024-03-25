import { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import { Portal } from "../Portal/Portal";
import { useModal } from "@/shared/lib/hooks/useModal";

import cls from "./Modal.module.scss";

interface IModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  isLazy?: boolean; // ленивая модалка, появляется в доме только после открытия
  children: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<IModalProps> = ({ onClose, isOpen, isLazy, children, className }) => {
  const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

  function onContentClick(event: React.MouseEvent) {
    // предотвращает всплытие
    event.stopPropagation();
  }

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Modal, { [cls.opened]: isOpen, [cls.isClosing]: isClosing }, [className])}>
        <div onClick={close} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
