import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { INotification } from "../../model/types/notification";
import { Text } from "@/shared/ui/Text";

import { AppLink } from "@/shared/ui/AppLink/AppLink";

import cls from "./NotificationItem.module.scss";

interface INotificationItemProps {
  className?: string;
  item: INotification;
}

export const NotificationItem: React.FC<INotificationItemProps> = ({ className, item }) => {
  const { t, i18n } = useTranslation();

  if (item.href) {
    <AppLink to={item.href} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </AppLink>;
  }

  return (
    <div className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </div>
  );
};
