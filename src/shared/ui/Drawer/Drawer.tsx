import { classNames, Mods } from "shared/lib/classNames/classNames";
import { memo, ReactNode, useCallback, useEffect } from "react";

import { Overlay } from "../Overlay/Overlay";

import { Portal } from "../Portal/Portal";

import cls from "./Drawer.module.scss";

import { useDrag } from "@use-gesture/react";
import { a, useSpring, config } from "@react-spring/web";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  isLazy?: boolean;
}

const height = window.innerHeight - 100;

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, isLazy } = props;

  const [{ y }, api] = useSpring(() => ({ y: height }));

  if (isLazy) {
    return null;
  }

  const openDrawer = () => {
    api.start({ y: 0, immediate: false });
  };

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer, api]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },

      onResolve: onClose,
    });
  };

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? "block" : "none"));

  return (
    <Portal element={document.body}>
      <div className={classNames(cls.Drawer, {}, [className, "", ""])}>
        <Overlay onClick={close} />
        <a.div className={cls.sheet} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()}>
          {children}
        </a.div>
      </div>
    </Portal>
  );
});
