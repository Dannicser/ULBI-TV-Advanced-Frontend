import { useParams } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";

import { EditableProfileCard } from "@/features/EditableProfileCard";

import { Page } from "@/widgets/Page/Page";

import cls from "./ProfilePage.module.scss";

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames(cls.ProfilePage, {}, [className])}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
