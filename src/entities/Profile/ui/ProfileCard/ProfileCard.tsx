import { classNames } from "@/shared/lib/classNames/classNames";
import { AlignText, Text, ThemeText } from "@/shared/ui/Text";

import { IProfile } from "@/entities/Profile/model/types/profile";
import { PageLoader } from "@/widgets/PageLoader";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Input } from "@/shared/ui/Input/Input";

import { Currency, CurrencySelect } from "@/entities/Currency";
import { CountrySelect, County } from "@/entities/Country";

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
    <div data-testid="ProfileCard" className={classNames(cls.ProfileCard, {}, [className])}>
      <div>
        <div className={cls.avatar}>
          {!data?.avatar ? (
            <Avatar src={data?.avatar} />
          ) : (
            <Avatar src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/380x240" />
          )}
        </div>
        <Input data-testid={"ProfileCard.firstname"} disabled={readonly} onChange={onChangeFirstname} className={cls.inp} value={data?.firstname} />
        <Input data-testid={"ProfileCard.lastname"} disabled={readonly} onChange={onChangeLastname} className={cls.inp} value={data?.lastname} />
        <Input data-testid={"ProfileCard.age"} disabled={readonly} onChange={onChangeAge} className={cls.inp} value={data?.age} />
        <Input data-testid={"ProfileCard.city"} disabled={readonly} onChange={onChangeCity} className={cls.inp} value={data?.city} />
        <Input data-testid={"ProfileCard.username"} disabled={readonly} onChange={onChangeUsername} className={cls.inp} value={data?.username} />

        <CurrencySelect readonly={readonly} onChange={onChangeCurrency} value={data?.currency} />
        <CountrySelect readonly={readonly} onChange={onChangeCountry} value={data?.country} />
      </div>
    </div>
  );
};
