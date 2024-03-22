import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

import cls from "./LoginModal.module.scss";

interface ILoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal isLazy={true} isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
      <Suspense fallback={"..."}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
