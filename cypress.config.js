const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureWriter(on, config);
      return config;
    },
  },
  cucumber: {
    stepDefinitions: "cypress/e2e/stepDef/**/*.js",
  },
});