const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {

    entry: {
        server: path.resolve(__dirname, './src/server/server.js'),
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    target: 'node',

    module: {
        rules: [
            // Vue
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader",
            },
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCSSPlugin.loader,
                        options: {

                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }

                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Title',
            template: "!!ejs-webpack-loader!src/views/index.ejs", // шаблон
            filename: 'index.html', // название выходного файла
            chunkFilename: '[name].html',
            //chunks: ['vueRouter'],

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
    ],
    resolve: {
        alias: {
            //'vue': '@vue/runtime-dom', // only <template>
            vue: "vue/dist/vue.esm-bundler.js" // Ha-hack =) // ? vue/dist/vue.runtime.esm-bundler
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },


}