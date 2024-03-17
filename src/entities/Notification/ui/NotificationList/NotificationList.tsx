import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { useNotificationsList } from "../../api/notificationApi";

import { HPopover } from "shared/ui/Popover/HPopover";
import { Button } from "shared/ui/Button/Button";

import { NotificationItem } from "../NotificationItem/NotificationItem";

import cls from "./NotificationList.module.scss";

interface INotificationListProps {
  className?: string;
}

export const NotificationList: React.FC<INotificationListProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { data, isError, isLoading } = useNotificationsList(null);

  return (
    <div className={classNames(cls.NotificationList, {}, [className])}>
      <HPopover className={cls.notifications} trigger={<Button>Уведомления</Button>}>
        {data?.map((item) => {
          return <NotificationItem item={item} />;
        })}
      </HPopover>
    </div>
  );
};
