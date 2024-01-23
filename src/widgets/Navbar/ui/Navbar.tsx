import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";
import { LangSwitcher } from "widgets/LangSwitcher";

import cls from "./Navbar.module.scss";

import { Button } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginModal } from "features/AuthByUserName";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  // если мы передаем функцию как пропс, ссылку на нее надо сохранять, иначе при перерендере она будет пересоздаваться
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [isAuthModal]);

  // если мы передаем функцию как пропс, ссылку на нее надо сохранять, иначе при перерендере она будет пересоздаваться
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, [isAuthModal]);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button onClick={onShowModal} className={cls.enter}>
          {t("SignIn")}
        </Button>
      </div>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
