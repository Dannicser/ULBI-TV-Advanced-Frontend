import { IBuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, //открывает страницу автоматически в браузере
  };
}
