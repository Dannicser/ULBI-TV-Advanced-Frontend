import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { fetchProfileData, getProfileReadonly, profileActions, profileReducer } from "entities/Profile";
import { ProfileCard } from "entities/Profile";
import { getProfileLoading } from "entities/Profile";
import { getProfileError } from "entities/Profile";
import { getProfileData } from "entities/Profile";

import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

import cls from "./ProfilePage.module.scss";
import { Currency } from "entities/Currency";
import { County } from "entities/Country";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);

  const onChangeFirstname = useCallback((firstname: string) => {
    dispatch(profileActions.updateProfile({ firstname }));
  }, []);

  const onChangeLastname = useCallback((lastname: string) => {
    dispatch(profileActions.updateProfile({ lastname }));
  }, []);

  const onChangeCity = useCallback((city: string) => {
    dispatch(profileActions.updateProfile({ city }));
  }, []);

  const onChangeAge = useCallback((age: string) => {
    dispatch(profileActions.updateProfile({ age: Number(age) }));
  }, []);

  const onChangeUsername = useCallback((username: string) => {
    dispatch(profileActions.updateProfile({ username }));
  }, []);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency: currency }));
  }, []);

  const onChangeCountry = useCallback((country: County) => {
    dispatch(profileActions.updateProfile({ country: country }));
  }, []);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={reducers}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          readonly={readOnly}
          onChangeLastname={onChangeLastname}
          onChangeFirstname={onChangeFirstname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          error={error}
          isLoading={isLoading}
          data={data}
        />
      </div>
    </DynamicModelLoader>
  );
};

export default ProfilePage;
