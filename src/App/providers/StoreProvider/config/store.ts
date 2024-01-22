import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: _IS_DEV_,
    preloadedState: initialState, // данные для тестов
  });
}

// createReduxStore будет удобно потом в стокибуке или там, где нужны декораторы
