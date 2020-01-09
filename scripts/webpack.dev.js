const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.js')
const utils = require('./utils')

const { srcPath } = utils

const HOST = '0.0.0.0'
const PORT = 3203

module.exports = function (env) {
  const config = {
    devtool: 'eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: "Henson's Blog",
        template: srcPath('assets/template/index.html'),
        favicon: path.join(__dirname, '../favicon.ico')
      })
    ],
    devServer: {
      // open: true
      hot: true,
      host: HOST,
      port: PORT,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7001',
          pathRewrite: { '^/api': '' }
        }
      }
    }
  }
  return webpackMerge(baseConfig(env), config)
}
