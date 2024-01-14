import { Configuration, RuleSetRule } from "webpack";
import { IBuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default ({ config }: { config: Configuration }) => {
  const paths: IBuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".tsx", ".ts", ".js");
  config.module?.rules?.push(buildCssLoaders(true));

  config.plugins?.push(new MiniCssExtractPlugin());

  config.module!.rules = config.module?.rules?.map((rule: any) => {
    if (/svg/.test(rule?.test as string)) {
      return { ...rule, exclude: "/.svg$/i" }; // лоадер больше не будет обрабатывать svg
    }

    return rule;
  }); // для опрделенных лоадеров, которые необходимо исключить

  return config;
};

// вебпак конфиг для сторибука для абсолютных импортов и css loaders
