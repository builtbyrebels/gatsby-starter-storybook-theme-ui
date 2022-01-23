module.exports = {
  features: {
    emotionAlias: false,
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-gatsby",
  ],
webpackFinal: async (config, { configType }) => {
  config.output.publicPath = '/_storybook/';
  return config;
},
managerWebpack: async (config) => {
  config.output.publicPath = '/_storybook/';
  return config;
},
  core: {
    builder: "webpack5",
  },
};
