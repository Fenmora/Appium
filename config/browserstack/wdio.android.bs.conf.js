const { config } = require("./wdio.shared.bs.conf.js");

//
// ====================
// Configuration credentials
// ====================

config.user = "fenmora_zUfLK6";
config.key = "4291SSig7YgWNqtBFwnm";

config.services = ["browserstack"];

//
// ====================
// Runner Configuration
// ====================
config.specs = ["./test/specs/addNote.spec.js"];

const buildName = `Android: build-${new Date().getTime()}`;

config.capabilities = [
    {
        "appium:platformVersion": "9.0",
        platformName: "Android",
        "appium:app": "bs://6a695b87c5092b215ad3b1e8c974ba734e6bc5ec",
        "appium:deviceName": "Google Pixel 3",
        "appium:autoGrantPermissions": true,
        "appium:noReset": false,
    },
    {
        "appium:platformVersion": "12.0",
        platformName: "Android",
        "appium:app": "bs://6a695b87c5092b215ad3b1e8c974ba734e6bc5ec",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "appium:autoGrantPermissions": true,
        "appium:noReset": false,
    },
    {
        "appium:platformVersion": "11.0",
        platformName: "Android",
        "appium:app": "bs://6a695b87c5092b215ad3b1e8c974ba734e6bc5ec",
        "appium:deviceName": "OnePlus 9",
        "appium:autoGrantPermissions": true,
        "appium:noReset": false,
    },
];

exports.config = config;
