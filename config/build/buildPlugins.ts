import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";

export function buildPlugins({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash:8].css" }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev),
    }),
  ];
}

//MiniSccExtractPlugin - разграничивает css и js файлы в бандле

//DefinePlugin - позволяет прокидывать глобальные переменные
