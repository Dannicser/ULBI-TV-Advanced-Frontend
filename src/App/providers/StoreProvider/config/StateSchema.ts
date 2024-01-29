import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ICounterSchema } from "entities/Counter";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUserName";

export interface StateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // ассинхронные редьюсеры
  loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof StateSchema; //названия редьюсеров

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>; // возвращает объект с редьюсерами
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore {
  reducerManager: IReducerManager;
}
