import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
    use: "ts-loader",
    exclude: /node_modules/, // то что не надо обрабатывать лоадером
  };

  return [typescriptLoader];
}
