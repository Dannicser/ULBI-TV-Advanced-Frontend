import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Sidebar } from "./Sidebar";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (arg) => {
  return <Sidebar {...arg}></Sidebar>;
};

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DARK = Template.bind({});
DARK.decorators = [ThemeDecorator(Theme.DARK)];
