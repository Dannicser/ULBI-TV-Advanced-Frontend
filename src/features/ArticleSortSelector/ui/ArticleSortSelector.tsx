import { useMemo } from "react";

import { ArticleSortField } from "@/entities/Article";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ISelectOptions, Select } from "@/shared/ui/Select/Select";
import { SortOrder } from "@/shared/types";

import cls from "./ArticleSortSelector.module.scss";

interface IArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: React.FC<IArticleSortSelectorProps> = (props) => {
  const { sort, order, onChangeOrder, onChangeSort, className } = props;

  const orderOptions = useMemo<ISelectOptions<SortOrder>[]>(() => {
    return [
      { value: "asc", content: "по возрастанию" },
      { value: "desc", content: "по убыванию" },
    ];
  }, []);

  const sortFieldOptions = useMemo<ISelectOptions<ArticleSortField>[]>(() => {
    return [
      { value: ArticleSortField.CREATED, content: "по дате создания" },
      { value: ArticleSortField.VIEWS, content: "по просмотрам" },
      { value: ArticleSortField.TITLE, content: "по названию" },
    ];
  }, []);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<SortOrder> onChange={onChangeOrder} label={"Сортировать"} options={orderOptions} />
      <Select<ArticleSortField> onChange={onChangeSort} label={"Сортировать"} options={sortFieldOptions} />
    </div>
  );
};
