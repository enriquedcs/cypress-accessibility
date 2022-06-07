const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimation: true,
  defaultCommandTimeout: 6000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 150000,
  responseTimeout: 150000,
  video: true,
  failOnStatusCode: false,
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  env: {
    'cypress-plugin-snapshots': {
      autoCleanUp: true,
      imageConfig: {
        threshold: 0.01,
      },
    },
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
})
