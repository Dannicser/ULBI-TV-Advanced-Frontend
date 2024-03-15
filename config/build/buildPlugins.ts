import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { IBuildOptions } from "./types/config";

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
    new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true }),
    // проверяер типы в отдельном процессе
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },

        mode: "write-references",
      },
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}

//MiniSccExtractPlugin - разграничивает css и js файлы в бандле

//DefinePlugin - позволяет прокидывать глобальные переменные
