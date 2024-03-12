import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { County } from "../model/types/country";

import { Select } from "shared/ui/Select/Select";

interface ICountrySelectorProps {
  className?: string;
  value?: County;
  onChange?: (value: County) => void;
  readonly?: boolean;
}

//выноси вверх, не будет перерисовок или memo
const options = [
  { value: County.RUSSIA, content: County.RUSSIA, disabled: false },
  { value: County.USA, content: County.USA, disabled: false },
];

export const CountrySelect: React.FC<ICountrySelectorProps> = memo((props) => {
  const { value, onChange, readonly, className } = props;

  const onChangeHander = (value: string) => {
    onChange?.(value as County);
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Select label="Выберите страну" options={options} readonly={readonly} value={value} onChange={onChangeHander} />
    </div>
  );
});
