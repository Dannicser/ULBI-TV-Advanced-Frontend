import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IArticleTextBlock } from "../../model/types/article";

import { Text } from "@/shared/ui/Text";

import cls from "./ArticleTextBlockComponent.module.scss";

interface IArticleTextBlockComponentProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<IArticleTextBlockComponentProps> = memo(({ className, block }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title ? <Text title={block.title} className={cls.title} /> : null}
      {block.paragraphs.map((paragraph, i) => (
        <Text key={i} className={cls.paragraph} text={paragraph} />
      ))}
    </div>
  );
});
