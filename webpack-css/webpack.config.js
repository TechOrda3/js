const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },

    devServer: {
        static: './dist',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devtool: 'source-map'
}
