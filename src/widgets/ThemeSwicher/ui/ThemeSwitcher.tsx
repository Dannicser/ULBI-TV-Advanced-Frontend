import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import { useTheme } from "@/app/providers/ThemeProvider";

import { Button, ThemeButton } from "@/shared/ui/Button/Button";

import cls from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {t("Theme")}
    </Button>
  );
};
