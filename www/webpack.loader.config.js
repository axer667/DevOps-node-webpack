const path = require('path')
const MiniCSSPlugin = require('mini-css-extract-plugin');

const loader = {
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
                generator: {
                    filename: 'scripts/[name][ext]'
                }
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'pictures/[name][ext]'
                }
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
                generator: {
                    filename: 'svg/[name][ext]'
                }
            },
            // CSS, PostCSS, Sass
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
            // ejs
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-webpack-loader",
                        options: {
                            data: {title: "ejs Title", someVar:"var"},
                            htmlmin: true
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = loader