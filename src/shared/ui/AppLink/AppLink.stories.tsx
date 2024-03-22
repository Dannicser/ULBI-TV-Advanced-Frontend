import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (arg) => {
  return <AppLink {...arg}></AppLink>;
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Primary",
  theme: AppLinkTheme.PRIMARY,
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};
SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

//
//

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Primary",
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
