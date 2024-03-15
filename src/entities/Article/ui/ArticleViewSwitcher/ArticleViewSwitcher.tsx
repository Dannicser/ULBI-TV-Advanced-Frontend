import { ArticleView } from "../../../Article/model/consts/consts";
import { Button } from "shared/ui/Button/Button";

import cls from "./ArticleViewSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

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
