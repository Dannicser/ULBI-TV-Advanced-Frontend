import { classNames } from "@/shared/lib/classNames/classNames";

import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Text } from "@/shared/ui/Text";
import { StartRating } from "@/shared/ui/StarRating/StartRating";
import { useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Button, SizeButton, ThemeButton } from "@/shared/ui/Button/Button";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

import cls from "./RatingCard.module.scss";

interface IRatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: (starsCount?: number) => void;
  onAccept?: (starsCount?: number, feedback?: string) => void;
}

export const RatingCard: React.FC<IRatingCardProps> = (props) => {
  const { className, title, feedbackTitle, hasFeedBack, onCancel, onAccept } = props;

  const [isModal, setIsModal] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);

    if (hasFeedBack) {
      setIsModal(true);
    } else {
      onAccept?.(selectedStarsCount, feedback);
    }
    setIsModal(true);
  }, []);

  const onAcceptHander = useCallback(() => {
    setIsModal(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, onAccept]);

  const onCancelHander = useCallback(() => {
    setIsModal(false);
    onAccept?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <VStack>
        <Text title={feedbackTitle} />
        <Input value={feedback} onChange={setFeedback} placeholder="Введите отзыв" />
      </VStack>
    </>
  );

  return (
    <div className={classNames(cls.RatingCard, {}, [className])}>
      <VStack>
        <Text title={title} />
        <StartRating onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModal}>
          {modalContent}

          <HStack gap={"4"} justify="end">
            <Button onClick={onCancelHander} theme={ThemeButton.DANGER}>
              Закрыть
            </Button>
            <Button onClick={onAcceptHander} theme={ThemeButton.OUTLINE}>
              Отправить
            </Button>
          </HStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer onClose={onCancelHander} isOpen={isModal}>
          {modalContent}

          <VStack gap="4">
            <Button fullWidth size={SizeButton.LARGE} onClick={onAcceptHander} theme={ThemeButton.OUTLINE}>
              Отправить
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </div>
  );
};
