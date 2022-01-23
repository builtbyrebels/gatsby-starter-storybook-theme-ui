const { execSync } = require("child_process");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onPostBuild = async ({ reporter }) => {
  reporter.info(
   `Publishing Storybook`
  );
  await execSync('./node_modules/.bin/build-storybook -o ./public/_storybook')
}