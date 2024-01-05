import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // файлы, которые необходимо пропустить через лоадер
    use: "ts-loader",
    exclude: /node_modules/, // то что не надо обрабатывать лоадером
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typescriptLoader, scssLoader];
}

// typescript loader умеет работать с реакт jsx по дефолту
