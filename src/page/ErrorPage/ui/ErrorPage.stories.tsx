import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { ErrorPage } from "./ErrorPage";

export default {
  title: "pages/ErrorPage",
  component: ErrorPage,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (arg) => {
  return <ErrorPage {...arg}></ErrorPage>;
};

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DARK = Template.bind({});
DARK.decorators = [ThemeDecorator(Theme.DARK)];
