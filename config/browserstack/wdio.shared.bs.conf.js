const { default: BrowserstackService } = require("@wdio/browserstack-service");

require("dotenv").config();
exports.config = {
  maxInstances: 1,

  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: "info",

  user: "fenmora_zUfLK6",
  key: "4291SSig7YgWNqtBFwnm",
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

  services: ["browserstack"],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
};
