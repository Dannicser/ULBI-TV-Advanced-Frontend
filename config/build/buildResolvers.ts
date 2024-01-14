import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(options: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    //Настройка абсолютных путей
    preferAbsolute: true, // абсолютные пути в приоритете
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    symlinks: false,
    alias: {},
    //
  };
}

//чтобы писать импорты без расширения файлов
