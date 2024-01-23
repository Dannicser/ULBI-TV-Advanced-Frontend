import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // внутрь хука можно добавить имя файла с переводами, и тогда тянуть перевод можно частично

  return <div>{t("AboutPage")}</div>;
};

export default AboutPage;
