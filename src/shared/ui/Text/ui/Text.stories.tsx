import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Text } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (arg) => {
  return <Text {...arg}></Text>;
};

export const TextLightTheme = Template.bind({});
TextLightTheme.args = {
  title: "Title",
  text: "Text",
};
TextLightTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

export const TextDarkTheme = Template.bind({});
TextLightTheme.args = {
  title: "Title",
  text: "text",
};
TextDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
