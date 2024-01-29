import { Reducer } from "@reduxjs/toolkit";
import { IReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";

import { useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface IDynamicModelLoaderProps {
  reducers: ReducersList;
  isRemoveAfterUnmount?: boolean;
}

export const DynamicModelLoader: React.FC<IDynamicModelLoaderProps> = (props) => {
  const { children, reducers, isRemoveAfterUnmount = false } = props;

  const store = useStore() as IReduxStoreWithManager;

  useEffect(() => {
    // в момент монтирования ассинхронного компонента нужно добавить редьюсер

    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
    });

    console.log("mount");

    return () => {
      if (isRemoveAfterUnmount) {
        console.log("unmount");

        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
        });
      }
    };
  }, []);

  return <>{children}</>;
};
