const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

const plugin = {

    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Title',
            template: "!!ejs-webpack-loader!" + path.resolve(__dirname, './src/views/index.ejs'), // шаблон
            filename: 'index.html', // название выходного файла
            chunkFilename: 'index.html',
            chunks: ['vueRouter']
        }),
        new MiniCSSPlugin({
            filename: `css/[name].css`,
            chunkFilename: 'css/[id].css',
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
module.exports = plugin