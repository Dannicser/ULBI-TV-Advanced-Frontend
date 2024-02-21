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
import { getProfileValidateErrors } from "entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { Text, ThemeText } from "shared/ui/Text";
import { useParams } from "react-router-dom";
import { Page } from "shared/ui/Page/Page";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ className }) => {
  const { t, i18n } = useTranslation("profile");

  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);

  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);

  const validateErrors = useSelector(getProfileValidateErrors);

  const { id } = useParams<{ id: string }>();

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_AGE]: t("INCORRECT_USER_AGE"),
    [ValidateProfileError.INCORRECT_USER_COUNTRY]: t("INCORRECT_USER_COUNTRY"),
    [ValidateProfileError.INCORRECT_USER_NAME]: t("INCORRECT_USER_NAME"),
    [ValidateProfileError.NO_DATA]: t("NO_DATA"),
    [ValidateProfileError.SERVER_ERROR]: t("SERVER_ERROR"),
  };

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

  if (!id) {
    return null;
  }

  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, []);

  return (
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={reducers}>
      <Page className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.map((error) => {
          return <Text theme={ThemeText.ERROR} text={validateErrorTranslates[error]} key={error} />;
        })}
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
      </Page>
    </DynamicModelLoader>
  );
};

export default ProfilePage;
