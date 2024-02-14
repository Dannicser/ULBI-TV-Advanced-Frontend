import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AlignText, Text } from "shared/ui/Text";

import { IArticleImageBlock } from "../../../Article/model/types/article";

import cls from "./ArticleImgBlockComponent.module.scss";

interface IArticleImgBlockComponentProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImgBlockComponent: React.FC<IArticleImgBlockComponentProps> = memo(({ className, block }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImgBlockComponent, {}, [className])}>
      <img src={block.src} />
      {block.title ? <Text align={AlignText.LEFT} text={block.title} /> : null}
    </div>
  );
});
