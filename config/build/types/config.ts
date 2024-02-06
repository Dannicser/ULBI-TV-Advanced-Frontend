export type BuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string; // до index.ts
  build: string; // до папки со сборкой
  html: string;
  src: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  enviroment?: Enviroment;
}

export type Enviroment = "storybook" | "frontend" | "jest";
