﻿// reuse existing webpack.config
// remove entry value since karma-webpack will set its value automatically
var webpackConfig = require("../../webpack.config.js")();
webpackConfig.entry = undefined;

module.exports = (config) => {
    config.set({
        basePath: ".",
        frameworks: ["jasmine"],
        files: [
            "./test.main.ts"
        ],
        preprocessors: {
            "./test.main.ts": ["webpack"]
        },
        mime: {
            "application/javascript": ["ts"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "error-only"
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: true,
        browsers: ["Chrome"],
        concurrency: Infinity
    });
}