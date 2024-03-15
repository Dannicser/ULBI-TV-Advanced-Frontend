import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  // const typescriptLoader = {
  //   test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
  //   use: "ts-loader",
  //   exclude: /node_modules/, // то что не надо обрабатывать лоадером
  // };

  const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
  const codeTsxBabelLoader = buildBabelLoader({ isDev, isTsx: true });

  const scssLoader = buildCssLoaders(isDev);

  return [codeBabelLoader, codeTsxBabelLoader, scssLoader];
}

// typescript loader умеет работать с реакт jsx по дефолту
