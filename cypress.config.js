const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '94tnyv',
  e2e: {
    retries: 2,
    baseUrl: "https://qamid.tmweb.ru/", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      adminPath: '/admin/',
      userPath: '/client/index.php',
    },
  },
});
