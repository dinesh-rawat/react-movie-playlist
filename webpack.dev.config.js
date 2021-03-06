const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    devServer: {
        host: 'localhost',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },  {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    }
};