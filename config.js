var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var rootPath = path.resolve(__dirname);
function resolve(dir) {
    return path.resolve(__dirname, dir);
}
module.exports = {
    entry: {
        index: resolve('./components/index')
    },
    output: {
        path: rootPath,
        filename: './src/[name].js',
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '$': "jquery",
        }
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loaders: ['css-loader', 'style-loader'],
                exclude: '/node_modules',
            },
            {
                test: /.less$/,
                loaders: ['css-loader', 'style-loader', 'less-loader'],
                exclude: '/node_modules',
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: '/node_modules',
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                options: {//告诉babel需要怎么转
                    presets: ["es2015", "react"]
                },
            }
        ]
    },
    watch:true,
    plugins: [

    ]
}