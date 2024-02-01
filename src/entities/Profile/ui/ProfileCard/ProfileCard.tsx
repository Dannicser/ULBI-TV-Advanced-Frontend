import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<IProfileCardProps> = ({ className }) => {
  const { t, i18n } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        <Button>{t("Editing")}</Button>
      </div>

      <div>
        <Input className={cls.inp} value={data?.firstname} />

        <Input className={cls.inp} value={data?.lastname} />
      </div>
    </div>
  );
};
