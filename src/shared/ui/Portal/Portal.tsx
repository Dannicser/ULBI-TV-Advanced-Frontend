import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode; // что
  element: HTMLElement; // куда (контейнер)
}

export const Portal: React.FC<IPortalProps> = ({ children, element }) => {
  return createPortal(children, element);
};
