const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require("path");

const mode = process.env.NODE_ENV === 'production' ? 'production': 'development'

module.exports = {
    mode: mode,

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.[contenthash].js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],

    devtool: mode === 'development' ? 'source-map' : false,

    devServer: {
        static: './dist',
        port: 9000,
        hot: true
    }
}
