var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    { test: /\.(ts|tsx)$/, loaders: ["awesome-typescript-loader"] },
    { test: /\.html/, loaders: ["html-loader"] },
    { test: /\.hbs/, loaders: ["html-loader"] },
    { test: /\.scss$|\.css$/, use: ExtractTextPlugin.extract({
        use: [{
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]
    }) },
    { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: "file?name=assets/[name].[hash].[ext]" }
];