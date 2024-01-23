import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input isAutoFocus={true} type="text" />
      <Input type="text" />
      <Button>{t("SignIn")}</Button>
    </div>
  );
};
