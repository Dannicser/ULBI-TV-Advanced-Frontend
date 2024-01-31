import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ProfilePage.module.scss";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { profileReducer } from "entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>Profile</div>
    </DynamicModelLoader>
  );
};

export default ProfilePage;
