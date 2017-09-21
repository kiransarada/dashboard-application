var copyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require("webpack");

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
                    loaders: ["ts-loader"]
                }
            ]
        },
        plugins: [
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                __dirname + "/ClientApp", // location of your src
                {} // a map of your routes
            ),
            new copyWebpackPlugin([
                { context: "ClientApp/app", from: "**/*.html", to: "" },
                { from: "Contents/css/Site.css", to: "../css/Site.css" },
                { from: "node_modules/bootstrap/dist/css/bootstrap.min.css", to: "../lib/bootstrap/css" },
                { from: "node_modules/bootstrap/dist/fonts", to: "../lib/bootstrap/fonts" }
            ])
        ]
    };
};