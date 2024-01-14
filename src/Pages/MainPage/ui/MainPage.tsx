import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // внутрь хука можно добавить имя файла с переводами, и тогда тянуть перевод можно частично

  return <div>{t("MainPage")}</div>;
};

export default MainPage;
