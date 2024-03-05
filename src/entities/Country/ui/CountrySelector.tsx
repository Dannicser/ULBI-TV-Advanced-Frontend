import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { County } from "../model/types/country";

import MyListbox from "shared/ui/ListBox/ListBox";

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

export const CountrySelector: React.FC<ICountrySelectorProps> = memo((props) => {
  const { value, onChange, readonly, className } = props;

  const onChangeHander = (value: string) => {
    onChange?.(value as County);
  };

  return (
    <div className={classNames("", {}, [className])}>
      <MyListbox
        label="Выберите страну"
        direction="bottom"
        items={options}
        readonly={readonly}
        defaultValue={value}
        value={value}
        onChange={onChangeHander}
      />
    </div>
  );
});
