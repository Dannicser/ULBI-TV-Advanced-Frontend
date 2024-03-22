import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

import { ReducersList } from "@/shared/lib/components/DynamicModelLoader";

const defaultAsyncReducers: ReducersList = {
  // loginForm: loginReducer,
  // profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider asyncReducers={{}} initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
};

//state будем прокидовать для тестов, удобная реализация через замыкание
