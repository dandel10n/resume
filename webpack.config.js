var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var isProd = process.env.NODE_ENV === 'production'
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: ['css-loader', 'sass-loader'],
  publicPath: '/public'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        hot: true,
        stats: "errors-only"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Maryia Radchuk',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/indexTemplate.html'
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
