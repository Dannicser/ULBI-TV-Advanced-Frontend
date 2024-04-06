import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

interface IForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage: React.FC<IForbiddenPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return (
    <Page data-testid="ForbiddenPage" className={classNames("", {}, [className])}>
      401
    </Page>
  );
};
