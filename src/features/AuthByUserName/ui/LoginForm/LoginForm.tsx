import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, ThemeText } from "shared/ui/Text";

import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginActions } from "../../model/slices/loginSlice";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";

import cls from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const dispatch = useDispatch();

  //useCallBack - потому что передаем вниз
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  //useCallBack - потому что передаем вниз
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  //useCallBack - потому что передаем вниз
  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ password, username }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Auth")} />
      <Input value={username} onChange={onChangeUsername} isAutoFocus={true} type="text" />
      <Input value={password} onChange={onChangePassword} type="text" />
      <Button disabled={isLoading} onClick={onLoginClick}>
        {t("SignIn")}
      </Button>

      {error && <Text title={error} theme={ThemeText.ERROR} />}
    </div>
  );
});
