import webpack from "webpack";

import path from "path";

import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { IBuildPaths } from "./config/build/types/config";

const mode = "development";
const isDev = mode === "development" ? true : false;

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  build: path.resolve(__dirname, "build"),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;

//__dirname - корень
// output - куда
// директива [contenthash] - создает уникальные названия файла, чтобы браузер не кешировал и не отдавал старую версию приложения пользователю
//template - шаблон для index.html
// loader - занимаются обработкой файлов, которые выходят за рамки js (ts, jpg, png)
