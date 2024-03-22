import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

import { getCanUserEditArticle } from "@/pages/ArticleDetailsPage/model/selectors/article/article";

import cls from "./ArticleDetailsPageHeader.module.scss";
import { getArticleDetailsData } from "@/entities/Article";

interface IArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader: React.FC<IArticleDetailsPageHeaderProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);

  const canEdit = useSelector(getCanUserEditArticle); // логика в селекторе!!! очень грамотно

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, []);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(RoutePath.articles + "/" + article?.id + "/" + "edit");
    }
  }, [article?.id]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={onBackToList}>
        Назад
      </Button>

      {canEdit && (
        <Button theme={ThemeButton.CLEAR} onClick={onEditArticle}>
          Редактировать
        </Button>
      )}
    </div>
  );
};
