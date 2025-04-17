const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)  //any congiguration.json file in a folder conig in the root cypress

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    return{}
  }

  return fs.readJSON(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'ht2jcz',
  e2e: {
    hideXHRInCommandLog: true, // Hide XHR in command log
    baseUrl: "http://automationteststore.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || '' // use specific (configuration) file if that exist then use it otherwise use nothing

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}", // use files with 
    excludeSpecPattern: "cypress/e2e/other/*.js", // exclude files from cypress/e2e/other ( folder isn't shown in App anymore)
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    // videoUploadOnPasses: false, // removed in version 13.0.0
    // experimentalSessionAndOrigin: true, // removed in version 12.0.0
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,  // overall setting (vy.visit())
    retries:{
      runMode: 0,
      openMode: 0
    },
    env:{
      first_name: "Sarah", // environment variable to use in tests
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
