import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (arg) => {
  return <Input {...arg}></Input>;
};

//
//

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  placeholder: "Темная тема",
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const LightTheme = Template.bind({});
LightTheme.args = {
  placeholder: "Светлая тема",
};
LightTheme.decorators = [ThemeDecorator(Theme.LIGHT)];
