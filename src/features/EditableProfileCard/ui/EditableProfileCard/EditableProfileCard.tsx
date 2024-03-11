import { useCallback, useEffect } from "react";

import { memo } from "react";

import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { Currency } from "entities/Currency";
import { County } from "entities/Country";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";

import { Text, ThemeText } from "shared/ui/Text";

import { useTranslation } from "react-i18next";

import { ValidateProfileError } from "../../model/types/EditableProfileCardSchema";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { ProfileCard } from "entities/Profile";

import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t, i18n } = useTranslation("profile");

  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);

  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);

  const validateErrors = useSelector(getProfileValidateErrors);

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

  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, []);

  return (
    <DynamicModelLoader isRemoveAfterUnmount reducers={reducers}>
      <EditableProfileCardHeader />
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
    </DynamicModelLoader>
  );
});
