import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoaders(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (url: string) => Boolean(url.endsWith(".module.scss")),
            localIdentName: isDev ? "[path].[name].[hash:base64:4]" : "[hash:base64:8]", //применяем хеши только к файлам scss с .module.
          },
        },
      },
      "sass-loader",
    ],
  };
}
