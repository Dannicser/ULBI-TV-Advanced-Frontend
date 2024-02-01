import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ProfilePage.module.scss";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { fetchProfileData, profileReducer } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { ProfileCard } from "entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModelLoader>
  );
};

export default ProfilePage;
