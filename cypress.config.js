// cypress.config.js
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Preprocessor for Gherkin
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);

      // Enable the cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Return config
      return config;
    },

    // IMPORTANT: Use mocha-junit-reporter
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'results/test-results-[hash].xml',
      toConsole: true
    },

    // We'll look for .feature specs
    specPattern: '**/*.feature',
    supportFile: false,
  }
});
