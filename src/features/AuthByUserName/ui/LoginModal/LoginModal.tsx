import { LoginForm } from "../LoginForm/LoginForm";

import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";

import cls from "./LoginModal.module.scss";

interface ILoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal isLazy={true} isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
