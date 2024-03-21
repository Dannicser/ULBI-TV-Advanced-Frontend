import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";

type GestureType = typeof import("@use-gesture/react");
type SpringType = typeof import("@react-spring/web");

interface IAnimationContext {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<IAnimationContext>({});

const getAsyncAnimationModules = async () => {
  return Promise.all([import("@use-gesture/react"), import("@react-spring/web")]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<IAnimationContext>; //!!!!!! обещает что поля всегда вернуться
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();

  useEffect(() => {
    getAsyncAnimationModules().then(([Gesture, Spring]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(() => {
    return {
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    };
  }, [isLoaded]);

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
