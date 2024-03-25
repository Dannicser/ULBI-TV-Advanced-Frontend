import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page/Page";

import { RatingCard } from "@/entities/RatingCard";
import { useState } from "react";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation(); // внутрь хука можно добавить имя файла с переводами, и тогда тянуть перевод можно частично

  const [value, setValue] = useState("");

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page>
      {t("MainPage")}

      <RatingCard hasFeedBack feedbackTitle="Оставьте отзыв о статье" title="Как вам статья?" />
    </Page>
  );
};

export default MainPage;
