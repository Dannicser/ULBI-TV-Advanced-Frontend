import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { County } from "entities/Country";

import { Select } from "shared/ui/Select/Select";

import { Currency } from "../model/types/currency";
import { Listbox } from "@headlessui/react";
import MyListbox from "shared/ui/ListBox/ListBox";

interface ICurrencySelectorProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

//выноси вверх, не будет перерисовок или memo
const options = [
  { value: Currency.RUB, content: Currency.RUB, disabled: false },
  { value: Currency.USD, content: Currency.USD, disabled: false },
];

export const CurrencySelect: React.FC<ICurrencySelectorProps> = memo((props) => {
  const { className, value, onChange, readonly = true } = props;
  const { t, i18n } = useTranslation();

  const onChangeHander = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <div className={classNames("", {}, [className])}>
      <MyListbox
        label="Выберите валюту"
        direction="top"
        readonly={readonly}
        value={value}
        defaultValue={value}
        onChange={onChangeHander}
        items={options}
      />
    </div>
  );
});
