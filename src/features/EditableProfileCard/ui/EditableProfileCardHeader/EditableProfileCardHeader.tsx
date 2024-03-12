import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text";

import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { getAuthData } from "entities/User";

import { getProfileReadonly } from "features/EditableProfileCard";
import { getProfileData } from "features/EditableProfileCard";
import { profileActions } from "features/EditableProfileCard";
import { updateProfiledata } from "features/EditableProfileCard";

import cls from "./EditableProfileCardHeader.module.scss";

interface IEditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: React.FC<IEditableProfileCardHeaderProps> = ({ className }) => {
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
        {isEdit && (
          <div>
            {readOnly ? (
              <Button data-testid={"EditableProfileCardHeader.EditButton"} onClick={onEdit}>
                {t("Editing")}
              </Button>
            ) : (
              <Button data-testid={"EditableProfileCardHeader.SaveButton"} onClick={onSave}>
                {t("Save")}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
