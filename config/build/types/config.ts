export type BuildMode = "production" | "development";

export interface IBuildPaths {
  entry: string; // до index.ts
  build: string; // до папки со сборкой
  html: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
}
