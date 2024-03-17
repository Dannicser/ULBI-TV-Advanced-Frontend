import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { Button, ThemeButton } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  function toggle() {
    return i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toggle}>
        {t("ChangeLanguage")}
      </Button>
    </div>
  );
};
