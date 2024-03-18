import { classNames, Mods } from "shared/lib/classNames/classNames";
import { memo, ReactNode } from "react";

import { Overlay } from "../Overlay/Overlay";

import { Portal } from "../Portal/Portal";

import { useModal } from "shared/lib/hooks/useModal";

import cls from "./Drawer.module.scss";

const ANIMATION_DELAY = 300;

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  isLazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, isLazy } = props;

  const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
