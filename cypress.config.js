const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: {
    MAILSLURP_API_KEY:
      "0a326e4dd61ae77cca3344e7c0a83c861fb3ac4d3248b37cd1f494f59ae07eeb",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
    // reporter: "nyan",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", { downloadFile });
    },
    video:true,
    // projectId: '4std5y',
  },

  
});
