import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwicher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { Button } from "shared/ui/Button/Button";

import { LoginModal } from "features/AuthByUserName";

import { userActions, getAuthData } from "entities/User";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface INavbarProps {
  className?: string; // если снаружи заходим изменить стили
}

export const Navbar: React.FC<INavbarProps> = memo(({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button onClick={onLogout} className={cls.enter}>
            {t("SingOut")}
          </Button>

          <AppLink className={cls.create} to={RoutePath.acticle_create}>
            <Button>{t("CreateArticle")}</Button>
          </AppLink>
        </div>

        <LangSwitcher />
        <ThemeSwitcher />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button onClick={onShowModal} className={cls.enter}>
          {t("SignIn")}
        </Button>
      </div>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      <LangSwitcher />
      <ThemeSwitcher />
    </header>
  );
});
