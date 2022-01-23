import { ThemeProvider } from "theme-ui";
import { addDecorator } from "@storybook/react";

import "@fontsource/open-sans"

import theme from "../src/gatsby-plugin-theme-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));