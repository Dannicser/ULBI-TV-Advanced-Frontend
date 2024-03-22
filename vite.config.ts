import { defineConfig } from "vite";

import reactPlugin from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [reactPlugin()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  define: { _IS_DEV_: JSON.stringify(true), __API__: JSON.stringify("http://localhost:5000"), __ENVIROMENT__: JSON.stringify("frontend") },
});
