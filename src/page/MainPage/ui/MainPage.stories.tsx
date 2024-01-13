import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (arg) => {
  return <MainPage {...arg}></MainPage>;
};

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DARK = Template.bind({});
DARK.decorators = [ThemeDecorator(Theme.DARK)];
