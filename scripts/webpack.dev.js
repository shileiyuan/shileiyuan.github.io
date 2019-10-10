const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.js')

const HOST = '0.0.0.0'
const PORT = 3000

module.exports = function(env) {
  return webpackMerge(baseConfig(env), {
    devtool: 'eval-source-map',
    devServer: {
      // open: true
      hot: true
    }
  })
}