import webpack from "webpack";

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

//__dirname - корень
// output - куда
// директива [contenthash] - создает уникальные названия файла, чтобы браузер не кешировал и не отдавал старую версию приложения пользователю
//template - шаблон для index.html
// loader - занимаются обработкой файлов, которые выходят за рамки js (ts, jpg, png)

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // чистит лишние файлы
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }), new webpack.ProgressPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
        use: "ts-loader",
        exclude: /node_modules/, // то что не надо обрабатывать лоадером
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //чтобы писать импорты без расширения файлов
  },
};

export default config;
