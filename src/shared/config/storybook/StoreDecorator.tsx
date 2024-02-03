import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUserName/model/slices/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModelLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider asyncReducers={defaultAsyncReducers} initialState={state}>
      {StoryComponent}
    </StoreProvider>
  );
};

//state будем прокидовать для тестов, удобная реализация через замыкание
