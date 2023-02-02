const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',

    devServer: {
        static: './dist'
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devtool: 'source-map'
}
