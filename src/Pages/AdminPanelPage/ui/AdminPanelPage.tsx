import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

interface IAdminPanelPageProps {
  className?: string;
}

const AdminPanelPage: React.FC<IAdminPanelPageProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  return <Page className={classNames("", {}, [className])}>AdminPanelPage</Page>;
};

export default AdminPanelPage;
