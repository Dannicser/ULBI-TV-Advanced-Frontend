import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { IArticleDetailsSchema } from "@/entities/Article";
import { ICounterSchema } from "@/entities/Counter";

import { IUserSchema } from "@/entities/User";
import { IAddCommentFormSchema } from "@/features/AddCommentForm";
import { ILoginSchema } from "@/features/AuthByUserName";
import { IProfileSchema } from "@/features/EditableProfileCard";
import { IScrollSaveSchema } from "@/features/ScrollSave";
import { IArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";

import { IArticlePageSchema } from "@/pages/ArticlesPage";
import { NavigateOptions, To } from "react-router-dom";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  //синхронные редьюсеры
  counter: ICounterSchema;
  user: IUserSchema;
  scrollSave: IScrollSaveSchema;
  //rtk
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // ассинхронные редьюсеры
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;

  articlePage?: IArticlePageSchema;
  addCommentForm?: IAddCommentFormSchema;
  articleDetailsPage?: IArticleDetailsPageSchema;
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
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: StateSchema; // для getState - чтобы вынимать его в фанке и знать типы
}
