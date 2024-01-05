import webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
    use: "ts-loader",
    exclude: /node_modules/, // то что не надо обрабатывать лоадером
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (url: string) => Boolean(url.endsWith(".module.scss")),
            localIdentName: options.isDev ? "[path].[name]" : "[hash:base64:8]", //применяем хеши только к файлам scss с .module.
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, scssLoader];
}

// typescript loader умеет работать с реакт jsx по дефолту
