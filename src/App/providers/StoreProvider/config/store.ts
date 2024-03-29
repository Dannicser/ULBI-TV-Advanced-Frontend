import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";

import { api } from "@/shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { scrollSaveReducer } from "@/features/ScrollSave";
import { rtkApi } from "@/shared/api/rtkApi";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  // корневой редьюсер, содержит только обязательные редьюсеры
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,

    //rtk

    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument = { api };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>, // при использованнии менеджера редакс СЮДА ПЕРЕДАЕМ САМ МЕНЕДЖЕР
    devTools: _IS_DEV_,
    preloadedState: initialState, // данные для тестов

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          // доп фичи в thunkApi
          extraArgument: extraArgument,
        },
      }).concat(rtkApi.middleware), //  не забываем добавить rtkApi сюда!
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// createReduxStore будет удобно потом в стокибуке или там, где нужны декораторы

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
