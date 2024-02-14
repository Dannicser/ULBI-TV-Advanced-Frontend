import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import { IArticleCodeBlock } from "../../../Article/model/types/article";

import { Code } from "shared/ui/Code/Code";

import cls from "./ArticleCodeBlockComponent.module.scss";

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<IArticleCodeBlockComponentProps> = memo(({ className, block }) => {
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code>{block.code}</Code>
    </div>
  );
});
