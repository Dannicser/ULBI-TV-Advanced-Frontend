import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // внутрь хука можно добавить имя файла с переводами, и тогда тянуть перевод можно частично

  return <Page data-testid={"AboutPage"}>{t("AboutPage")}</Page>;
};

export default AboutPage;
