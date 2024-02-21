import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>; // для сторибука ассинхронные редьюсеры
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  // const navigate = useNavigate();

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  console.log("store");

  return <Provider store={store}>{children}</Provider>;
};
