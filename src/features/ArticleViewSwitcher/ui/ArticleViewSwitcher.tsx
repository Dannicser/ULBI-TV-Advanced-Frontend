import { ArticleView } from "@/entities/Article";

import { Button } from "@/shared/ui/Button/Button";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./ArticleViewSwitcher.module.scss";

interface IArticleViewSwitcherProps {
  className?: string;
  view?: ArticleView;
  onChangeView?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    text: "Плитка",
  },
  {
    view: ArticleView.BIG,
    text: "Блок",
  },
];

export const ArticleViewSwitcher: React.FC<IArticleViewSwitcherProps> = ({ onChangeView, view }) => {
  const onClick = (newView: ArticleView) => () => {
    onChangeView?.(newView);
  };

  return (
    <div>
      {viewTypes.map((viewType) => {
        return (
          <Button
            className={classNames("", {}, [view === viewType.view ? cls["selected"] : ""])}
            key={viewType.text}
            onClick={onClick(viewType.view)}
          >
            {viewType.text}
          </Button>
        );
      })}
    </div>
  );
};
