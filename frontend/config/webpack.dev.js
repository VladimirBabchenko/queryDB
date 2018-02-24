var config = require("./main");
var webpackConfig = require("./webpack");
var merge = require("webpack-merge");

module.exports = merge(webpackConfig, {
    entry: {
        app: config.src + "/app.js"
    },

    output: {
        path: config.dist,
        filename: "[name].bundle.js"
    },

    devServer: {
        contentBase: config.src,
        colors: true,
        hot: true,
        historyApiFallback: true
    }
})