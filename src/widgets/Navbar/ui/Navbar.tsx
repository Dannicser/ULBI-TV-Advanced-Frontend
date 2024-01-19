import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";
import { LangSwitcher } from "widgets/LangSwitcher";

import cls from "./Navbar.module.scss";

import { Button } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  // если мы передаем функцию как пропс, ссылку на нее надо сохранять, иначе при перерендере она будет пересоздаваться
  const toggle = useCallback(() => {
    setIsAuthModal(!isAuthModal);
  }, [isAuthModal]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button onClick={toggle} className={cls.enter}>
          {t("SignIn")}
        </Button>
      </div>

      <Modal onClose={toggle} isOpen={isAuthModal}>
        {t("SignIn")}
      </Modal>
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
