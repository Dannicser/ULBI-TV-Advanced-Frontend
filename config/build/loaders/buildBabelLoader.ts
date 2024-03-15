interface IBuildBabelLoaderProps {
  isTsx?: boolean; // чтобы отдельно работать с tsx and ts
  isDev: boolean;
}

export function buildBabelLoader({ isDev, isTsx = true }: IBuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(js|jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
          ["@babel/plugin-transform-typescript", { isTsx }], // компилит ts вместо ts-loader
          ["@babel/plugin-transform-runtime"], // !!
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
