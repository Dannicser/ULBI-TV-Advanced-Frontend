import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import { Button } from "../Button/Button";

import cls from "./Code.module.scss";

interface ICodeProps {
  className?: string;
}

export const Code: React.FC<ICodeProps> = memo(({ className, children }) => {
  const onCopy = () => {
    if (children) {
      navigator.clipboard.writeText(children?.toString());
    }
  };

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn}>
        Копировать
      </Button>
      <code>{children}</code>;
    </pre>
  );
});
