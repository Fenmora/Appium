const path = require("path");
const { config } = require("./wdio.shared.conf");

//
// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ==================
// Specify Test Files
// ==================

config.specs = ["test/specs/addNote.spec.js"];

// ============
//  Capabilities
// ============
config.capabilities = [
  {
    platformName: "android",
    "appium:deviceName": "TestPhone",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/colorpad.apk"),
    // "appium:autoGrantPermissions": true,
    "appium:noReset": true,
  },
];

exports.config = config;
