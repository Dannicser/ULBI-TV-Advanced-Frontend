import webpack from "webpack";

import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types/config";

export default (env: IBuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development" ? true : false;
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:5000";

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
  });

  return config;
};

//__dirname - корень
// output - куда
// директива [contenthash] - создает уникальные названия файла, чтобы браузер не кешировал и не отдавал старую версию приложения пользователю
//template - шаблон для index.html
// loader - занимаются обработкой файлов, которые выходят за рамки js (ts, jpg, png)
