import { Reducer } from "@reduxjs/toolkit";
import { IReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";

import { useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface IDynamicModelLoaderProps {
  reducers: ReducersList;
  isRemoveAfterUnmount?: boolean;
}

export const DynamicModelLoader: React.FC<IDynamicModelLoaderProps> = (props) => {
  const { children, reducers, isRemoveAfterUnmount = false } = props;

  const store = useStore() as IReduxStoreWithManager;

  const dispatch = useAppDispatch();

  useEffect(() => {
    // в момент монтирования ассинхронного компонента нужно добавить редьюсер

    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
