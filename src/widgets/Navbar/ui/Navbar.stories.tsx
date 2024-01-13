import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Navbar } from "./Navbar";

export default {
  title: "widgets/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (arg) => {
  return <Navbar {...arg}></Navbar>;
};

export const Light = Template.bind({});
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DARK = Template.bind({});
DARK.decorators = [ThemeDecorator(Theme.DARK)];
