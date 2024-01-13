import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
    use: "ts-loader",
    exclude: /node_modules/, // то что не надо обрабатывать лоадером
  };

  const scssLoader = buildCssLoaders(options.isDev);
  return [typescriptLoader, scssLoader];
}

// typescript loader умеет работать с реакт jsx по дефолту
