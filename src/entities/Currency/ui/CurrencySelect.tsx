import { memo } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import { Select } from "shared/ui/Select/Select";

import { Currency } from "../model/consts/consts";

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
      <Select label="Выберите валюту" readonly={readonly} value={value} onChange={onChangeHander} options={options} />
    </div>
  );
});
