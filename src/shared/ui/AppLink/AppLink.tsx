import { memo } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLinkProps> = memo((props) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...other } = props;

  return (
    <Link to={to} {...other} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
});
