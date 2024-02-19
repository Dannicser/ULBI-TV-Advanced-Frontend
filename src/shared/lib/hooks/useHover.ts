import { useMemo, useState } from "react";

interface IUseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, IUseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover]);
};
