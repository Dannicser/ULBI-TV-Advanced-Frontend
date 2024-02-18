import { classNames } from "shared/lib/classNames/classNames";
import { AlignText, Text, ThemeText } from "shared/ui/Text";

import { IProfile } from "entities/Profile/model/types/profile";
import { PageLoader } from "widgets/PageLoader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";

import { Currency, CurrencySelect } from "entities/Currency";
import { CountrySelector, County } from "entities/Country";

import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname: (firstName: string) => void;
  onChangeLastname: (lastName: string) => void;
  onChangeCity: (city: string) => void;
  onChangeAge: (age: string) => void;
  onChangeUsername: (username: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: County) => void;
}

export const ProfileCard: React.FC<IProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <Text align={AlignText.CENTER} title="Произошла ошибка" text="Попробуйте обновить страницу" theme={ThemeText.ERROR} />;
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div>
        <div className={cls.avatar}>
          {data?.avatar ? (
            <Avatar src={data?.avatar} />
          ) : (
            <Avatar src="https://cdn3.iconfinder.com/data/icons/avatars-neutral/48/bl_816_avatar_race_neutral_man_empty_woman_male_female-512.png" />
          )}
        </div>
        <Input disabled={readonly} onChange={onChangeFirstname} className={cls.inp} value={data?.firstname} />
        <Input disabled={readonly} onChange={onChangeLastname} className={cls.inp} value={data?.lastname} />
        <Input disabled={readonly} onChange={onChangeAge} className={cls.inp} value={data?.age} />
        <Input disabled={readonly} onChange={onChangeCity} className={cls.inp} value={data?.city} />
        <Input disabled={readonly} onChange={onChangeUsername} className={cls.inp} value={data?.username} />

        <CurrencySelect readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
        <CountrySelector readonly={readonly} onChange={onChangeCountry} value={data?.country} />
      </div>
    </div>
  );
};
