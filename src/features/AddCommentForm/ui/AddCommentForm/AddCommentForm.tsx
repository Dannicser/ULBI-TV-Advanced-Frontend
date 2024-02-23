import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getAddCommentText } from "features/AddCommentForm/model/selectors/addCommentForm";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { addCommentFormActions, addCommentFormReducer } from "features/AddCommentForm/model/slice/addCommentFormSlice";
import { DynamicModelLoader, ReducersList } from "shared/lib/components/DynamicModelLoader";

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface IAddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const AddCommentForm: React.FC<IAddCommentFormProps> = ({ className, onSendComment }) => {
  const { t, i18n } = useTranslation();

  const text = useSelector(getAddCommentText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, []);

  const onSendHandler = useCallback(() => {
    onCommentTextChange("");
    onSendComment(text || "");
  }, [text]);

  return (
    <DynamicModelLoader reducers={reducers} isRemoveAfterUnmount={true}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input isAutoFocus className={cls.input} onChange={onCommentTextChange} value={text} placeholder="Введите текст комментария" />

        <Button onClick={onSendHandler}>Отправить</Button>
      </div>
    </DynamicModelLoader>
  );
};

export default AddCommentForm;
