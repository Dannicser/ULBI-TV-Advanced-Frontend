import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  // корневой редьюсер, содержит только обязательные редьюсеры
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce, // при использованнии менеджера редакс СЮДА ПЕРЕДАЕМ САМ МЕНЕДЖЕР
    devTools: _IS_DEV_,
    preloadedState: initialState, // данные для тестов
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// createReduxStore будет удобно потом в стокибуке или там, где нужны декораторы

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
