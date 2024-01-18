import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arg) => {
  return <Button {...arg}></Button>;
};

//
//

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  children: "Primary",
  theme: ThemeButton.PRIMARY,
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const LightPrimary = Template.bind({});
LightPrimary.args = {
  children: "Primary",
  theme: ThemeButton.PRIMARY,
};
LightPrimary.decorators = [ThemeDecorator(Theme.LIGHT)];

//
//

export const DarkClear = Template.bind({});
DarkClear.args = {
  children: "Clear",
  theme: ThemeButton.CLEAR,
};
DarkClear.decorators = [ThemeDecorator(Theme.DARK)];

export const LightClear = Template.bind({});
LightClear.args = {
  children: "Clear",
  theme: ThemeButton.CLEAR,
};
LightClear.decorators = [ThemeDecorator(Theme.LIGHT)];

//
//

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  children: "Outline",
  theme: ThemeButton.OUTLINE,
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const LightOutline = Template.bind({});
LightOutline.args = {
  children: "Outline",
  theme: ThemeButton.OUTLINE,
};
LightOutline.decorators = [ThemeDecorator(Theme.LIGHT)];

//
//

export const MediumLight = Template.bind({});
MediumLight.args = {
  children: "Medium",
  size: SizeButton.MEDIUM,
};
MediumLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const MediumDark = Template.bind({});
MediumDark.args = {
  children: "Medium",
  size: SizeButton.MEDIUM,
};
MediumDark.decorators = [ThemeDecorator(Theme.DARK)];

//
//

export const LargeLight = Template.bind({});
LargeLight.args = {
  children: "Large",
  size: SizeButton.LARGE,
};
MediumLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LargeDark = Template.bind({});
LargeDark.args = {
  children: "Large",
  size: SizeButton.LARGE,
};
LargeDark.decorators = [ThemeDecorator(Theme.DARK)];
