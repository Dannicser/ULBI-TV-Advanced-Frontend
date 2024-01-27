import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return <StoreProvider initialState={state}>{StoryComponent}</StoreProvider>;
};

//state будем прокидовать для тестов, удобная реализация через замыкание
