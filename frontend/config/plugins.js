var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].style].css",
    disable: process.env.NODE_ENV === "development"
});

var config = require("./main");

module.exports = [
    new HtmlWebpackPlugin({
        template: config.html
    }),
    extractSass,
    new webpack.NoEmitOnErrorsPlugin()
];