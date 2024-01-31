import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ICounterSchema } from "entities/Counter";
import { IProfileSchema } from "entities/Profile";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUserName";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // ассинхронные редьюсеры
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
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

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
}
