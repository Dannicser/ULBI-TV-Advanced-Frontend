import "@/app/style/index.scss";

import { Story } from "@storybook/react";

export const StyleDecorator = (story: () => Story) => story();

//декоратор который просто подключает глобальные стили
