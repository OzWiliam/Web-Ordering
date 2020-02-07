const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: [path.join(__dirname, '/public')],
        compress: true,
        port: 4000
    },
    plugins: [new MiniCssExtractPlugin()]
});