const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    hideXHRInCommandLog: true, // Hide XHR in command log
    baseUrl: "http://automationteststore.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}", // use files with 
    excludeSpecPattern: "cypress/e2e/other/*.js", // exclude files from cypress/e2e/other ( folder isn't shown in App anymore)
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env:{
      first_name: "Sarah", // environment variable to use in tests
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
