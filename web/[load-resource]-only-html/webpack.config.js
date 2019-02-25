const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
};