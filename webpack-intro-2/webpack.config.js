const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV === 'production' ? 'production': 'development';

module.exports = {
    mode: mode,

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },

    devtool: mode === 'development' ? 'source-map' : false,

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
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true
    }
}

