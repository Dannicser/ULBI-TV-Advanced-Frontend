import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { useNotificationsList } from "../../api/notificationApi";

import { NotificationItem } from "../NotificationItem/NotificationItem";

import { Skeleton } from "shared/ui/Skeleton/Skeleton";

import cls from "./NotificationList.module.scss";

interface INotificationListProps {
  className?: string;
}

export const NotificationList: React.FC<INotificationListProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const { data, isError, isLoading } = useNotificationsList(null);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={classNames(cls.NotificationList, {}, [className])}>
      {data?.map((item) => {
        return <NotificationItem item={item} />;
      })}
    </div>
  );
};
