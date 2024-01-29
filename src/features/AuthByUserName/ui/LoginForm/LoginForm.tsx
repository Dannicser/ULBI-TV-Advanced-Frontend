import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, ThemeText } from "shared/ui/Text";

import { loginActions, loginReducer } from "../../model/slices/loginSlice";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";

import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../..//model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";

import cls from "./LoginForm.module.scss";

//выносим сверху, чтобы при каждом рендере компонента не перерысовывать детей (ссылка будет новая)
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

interface ILoginFormProps {
  className?: string;
}

const LoginForm: React.FC<ILoginFormProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModelLoader isRemoveAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Auth")} />
        <Input value={username} onChange={onChangeUsername} isAutoFocus={true} type="text" />
        <Input value={password} onChange={onChangePassword} type="text" />
        <Button disabled={isLoading} onClick={onLoginClick}>
          {t("SignIn")}
        </Button>

        {error && <Text title={error} theme={ThemeText.ERROR} />}
      </div>
    </DynamicModelLoader>
  );
});

export default LoginForm;
