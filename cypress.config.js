// cypress.config.js
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } =
  require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Set up esbuild bundler for .feature files
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);

      // Add the cucumber preprocessor plugin WITH JSON output
      await addCucumberPreprocessorPlugin(on, config, {
        // This tells the preprocessor to produce a JSON report
        json: {
          enabled: true,
          output: 'results/cucumber-report.json', 
          // You can pick any output path you like
        },

        // Optionally, if you want "messages" output:
        // messages: {
        //   enabled: true,
        //   output: 'results/cucumber-messages.ndjson'
        // }
      });

      // Return updated config
      return config;
    },
    specPattern: '**/*.feature', // Tells Cypress to treat .feature files as specs
    supportFile: false
  }
});