import webpack from "webpack";

import { IBuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // чистит лишние файлы
      publicPath: "/", // берет статику из корня
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : undefined, // позволяют находить ошибки, долгий билд, быстрый ребилд (eval-cheap-module-source-map)
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
