const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',

    devServer: {
        static: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
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
