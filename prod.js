const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copy = require('quickly-copy-file');
const del = require('del');

copy('./assets/templates/index.html', 'index.html', function (error) {
  if (error) {
    return console.error(error);
  }
});
del(['build']);

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[chunkhash].js',
      // publicPath: '/'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        //filename相对的是build目录
        filename: '../index.html',
        hash: true,
        template: './assets/templates/index.html',
        favicon: './assets/images/favicon.ico'
      })
    ]
  })
}