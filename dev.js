const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./base.js');
const HOST = '0.0.0.0'
const PORT = 3001;

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
      // publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        filename: './index.html',
        hash: true,
        template: './assets/templates/index.html',
        favicon: './favicon.ico'
      })
    ],
    devServer: {
      // contentBase: './src',
      historyApiFallback: true,
      hot: true,
      host: HOST,
      port: PORT,
      stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
      },
      proxy: {
        '/api': {
          target: 'http://localhost:8085/',
          // target: 'http://10.248.153.182/eip-hrws/'
          pathRewrite: { '^/api': '' }
        }
      }
    }
  })
}