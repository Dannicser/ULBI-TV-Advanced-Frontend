import { useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import StarIcon from "../../assets/icons/star.svg";

import { Icon } from "../Icon/Icon";

import cls from "./StartRating.module.scss";

interface IStartRatingProps {
  className?: string;
  onSelect?: (starCount: number) => void;
  selectedStars?: number;
  size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StartRating: React.FC<IStartRatingProps> = (props) => {
  const { className, onSelect, selectedStars, size = 30 } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setIsSelected] = useState(Boolean(currentStarsCount));

  const onHover = (starsCount: number) => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StartRating, {}, [className])}>
      {stars.map((starRate, i) => {
        return (
          <Icon
            onClick={() => onClick(starRate)}
            onMouseLeave={onLeave}
            onMouseEnter={() => onHover(starRate)}
            width={size}
            height={size}
            //!!!! не забыть, что мы тут пробегаемся по массиву и выводим числа (starRate) от 1 до 5
            className={classNames(
              cls.starIcon,
              { [cls.selected]: isSelected, [cls.hovered]: currentStarsCount >= starRate, [cls.normal]: currentStarsCount <= starRate },
              []
            )}
            Svg={StarIcon}
            key={i}
          />
        );
      })}
    </div>
  );
};
