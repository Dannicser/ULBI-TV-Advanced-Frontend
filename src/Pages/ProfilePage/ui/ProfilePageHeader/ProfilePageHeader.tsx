import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";

import cls from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import { getProfileData, getProfileReadonly, profileActions, updateProfiledata } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { memo } from "react";
import { getAuthData } from "entities/User";

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<IProfilePageHeaderProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation("profile");

  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadonly);
  const authData = useSelector(getAuthData);
  const profileData = useSelector(getProfileData);

  const isEdit = authData?.id === profileData?.id;

  const onEdit = () => {
    dispatch(profileActions.setReadonly());
  };

  const onSave = () => {
    dispatch(profileActions.setReadonly());
    dispatch(updateProfiledata(profileData?.id));
  };

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <Text title={t("Profile")} />
        {isEdit && <div>{readOnly ? <Button onClick={onEdit}>{t("Editing")}</Button> : <Button onClick={onSave}>{t("Save")}</Button>}</div>}
      </div>
    </div>
  );
});
