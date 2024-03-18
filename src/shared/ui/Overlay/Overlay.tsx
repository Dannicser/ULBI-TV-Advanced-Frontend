import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Overlay.module.scss";

interface IOverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay: React.FC<IOverlayProps> = ({ className, onClick }) => {
  const { t, i18n } = useTranslation();

  return <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}></div>;
};
