const path = require('path')

const plugins = require('./webpack.plugin.config')
const loaders = require('./webpack.loader.config')

const { merge } = require('webpack-merge')

const buildWebpackConfig = merge(plugins, loaders, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dev'),
            //publicPath: "./assets", //should provide the path of the saved js, img, etc...
        },
        compress: true,
        historyApiFallback: true,
        port: 8080,
    },

    entry: {
        vueRouter: path.resolve(__dirname, './src/js/initVue.js')
    },

    output: {
        path: path.join(__dirname, 'dev'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        alias: {
            'vue': '@vue/runtime-dom',
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },

});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})