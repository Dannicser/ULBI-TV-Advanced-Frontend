module.exports = {
  // Required
  framework: "@storybook/react",
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"], // путь до исходного кода
  // Optional
  addons: ["@storybook/addon-essentials", "@storybook/addon-links", "@storybook/addon-interactions"],
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
  baseUrl: "./src/",
};
