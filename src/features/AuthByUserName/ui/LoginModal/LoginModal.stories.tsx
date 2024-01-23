import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { LoginModal } from "./LoginModal";

export default {
  title: "features/Modal",
  component: LoginModal,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (arg) => {
  return <LoginModal {...arg}></LoginModal>;
};

export const LoginModalLightTheme = Template.bind({});
LoginModalLightTheme.args = {
  isOpen: true,
};
LoginModalLightTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LoginModalDarkTheme = Template.bind({});
LoginModalDarkTheme.args = {
  isOpen: true,
};
LoginModalDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
