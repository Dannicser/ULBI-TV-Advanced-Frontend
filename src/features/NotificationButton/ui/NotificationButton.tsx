import { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import { NotificationList } from "@/entities/Notification";

import { Popover } from "@/shared/ui/Popover/HPopover";

import { Drawer } from "@/shared/ui/Drawer/Drawer";

import { BrowserView, MobileView } from "react-device-detect";

import { Button } from "@/shared/ui/Button/Button";

import cls from "./NotificationButton.module.scss";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider";

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton: React.FC<INotificationButtonProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpened] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <div className={classNames("", {}, [className])}>
      <BrowserView>
        <Popover trigger={<Button>Уведомления</Button>}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        <Button onClick={onOpen}>Уведомления</Button>
        <AnimationProvider>
          <Drawer onClose={onClose} isOpen={isOpen}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
};
