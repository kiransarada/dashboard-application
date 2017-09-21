var webpackConfig = require("../../webpack.config.js")();

module.exports = function (config) {
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
        webpack: Object.assign({}, webpackConfig, { entry: undefined }),
        webpackMiddleware: {
            stats: "verbose"
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