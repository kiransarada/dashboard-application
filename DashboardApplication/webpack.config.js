const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => {
    return {
        entry: {
            main: "./ClientApp/main.ts"
        },
        output: {
            filename: "bundle.js",
            path: __dirname + "/wwwroot/app",
            publicPath: "/app/"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "tslint-loader",
                    options: {
                        configFile: "tslint.json",
                        emitErrors: true,
                        failOnHint: true
                    }
                },
                {
                    test: /\.ts$/,
                    loaders: ["ts-loader"],
                    exclude: [/\.(spec|e2e|d)\.ts$/, /typings$/]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { context: "ClientApp/app", from: "**/*.html", to: "" },
                { from: "node_modules/bootstrap/dist/css/bootstrap.min.css", to: "../lib/bootstrap/css" },
                { from: "node_modules/bootstrap/dist/fonts", to: "../lib/bootstrap/fonts" }
            ])
        ]
    };
};