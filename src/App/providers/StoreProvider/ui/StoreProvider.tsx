import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
