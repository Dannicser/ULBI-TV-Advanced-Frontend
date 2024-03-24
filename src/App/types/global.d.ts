declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare const _IS_DEV_: boolean;
declare const __API__: string;
declare const __ENVIROMENT__: "storybook" | "frontend" | "jest";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
