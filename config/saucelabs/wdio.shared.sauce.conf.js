require("dotenv").config();
exports.config = {
  maxInstances: 1,

  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: "info",

  user: "oauth-fenmora-f6209",
  key: "1ca90eda-cca8-4240-a64d-f673e83de605",
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 120000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 10,

  services: [],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
