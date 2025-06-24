const { defineConfig } = require('cypress');
const { allureCypress } = require("allure-cypress/reporter");
const os = require("node:os")


module.exports = defineConfig({
  e2e: {
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    testIsolation: true,
    retries: {
      runMode: 1,
      openMode: 0
    },

    setupNodeEvents: (on, config) => {
      const environmentName = config.env.environmentName || 'local';
      const environmentFilename = `./settings/${environmentName}.settings.json`;
      console.log('loading %s', environmentFilename);
      const settings = require(environmentFilename)
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
      }

      allureCypress(on, config, {
        environmentInfo: {
          os_release: os.release(),
          os_version: os.version(),
          'Base URL': config.baseUrl,
          'Viewport': `${config.viewportWidth}x${config.viewportHeight}`,
          'Cypress Version': config.version,
          'Test Environment': environmentName,
          'Node Version': process.version,
          'Platform': process.platform
        },
      });

      return config;
    },
  },
});