import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({ paths, isDev, apiUrl, enviroment }: IBuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:8].css" }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __ENVIROMENT__: JSON.stringify(enviroment),
    }),
  ];

  if (!isDev) {
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}

//MiniSccExtractPlugin - разграничивает css и js файлы в бандле

//DefinePlugin - позволяет прокидывать глобальные переменные
