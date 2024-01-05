import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}

//чтобы писать импорты без расширения файлов
