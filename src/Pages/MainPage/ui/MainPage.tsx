import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // внутрь хука можно добавить имя файла с переводами, и тогда тянуть перевод можно частично

  return (
    <div>
      {t("MainPage")} <Counter />
    </div>
  );
};

export default MainPage;
