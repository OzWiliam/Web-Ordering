const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('staging')
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: 'public/index.html', to: '' },
            { from: 'public/assets', to: 'assets' }
        ])
    ]
});