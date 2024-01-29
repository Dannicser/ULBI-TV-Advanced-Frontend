import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { Button } from "shared/ui/Button/Button";

import { LoginModal } from "features/AuthByUserName";

import { userActions, getAuthData } from "entities/User";

import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const authData = useSelector(getAuthData);

  const { t, i18n } = useTranslation();

  // если мы передаем функцию как пропс, ссылку на нее надо сохранять, иначе при перерендере она будет пересоздаваться
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [isAuthModal]);

  // если мы передаем функцию как пропс, ссылку на нее надо сохранять, иначе при перерендере она будет пересоздаваться
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, [isAuthModal]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button onClick={onLogout} className={cls.enter}>
            {t("SingOut")}
          </Button>
        </div>

        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button onClick={onShowModal} className={cls.enter}>
          {t("SignIn")}
        </Button>
      </div>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
};
