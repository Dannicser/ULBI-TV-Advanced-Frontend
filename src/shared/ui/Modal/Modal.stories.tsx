import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (arg) => {
  return <Modal {...arg}></Modal>;
};

export const ModalWindowLight = Template.bind({});
ModalWindowLight.args = {
  children: "Modal window",
  element: document.body,
  isOpen: true,
};
ModalWindowLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalWindowDark = Template.bind({});
ModalWindowDark.args = {
  children: "Modal window",
  element: document.body,
  isOpen: true,
};
ModalWindowDark.decorators = [ThemeDecorator(Theme.DARK)];
