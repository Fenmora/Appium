const { config } = require("./wdio.shared.sauce.conf");

//
// ====================
// Runner Configuration
// ====================
config.specs = ["test/specs/addNote.spec.js"];

//
// ====================
// Capabilities Configuration
// ====================
const buildName = `Android: build-${new Date().getTime()}`;

config.capabilities = [
    {
        "appium:platformVersion": "11.0",
        platformName: "Android",
        "appium:app": "storage:filename=colorpad.apk",
        "appium:deviceName": "Galaxy S20 WQHD GoogleAPI Emulator",
        "appium:autoGrantPermissions": true,
        "appium:noReset": true,
        "sauce:options": {
            build: buildName,
            name: "addNote",
            appiumVersion: "1.22.1",
        },
    },
];

exports.config = config;
