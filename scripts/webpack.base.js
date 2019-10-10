const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { srcPath } = require('./utils')

module.exports = function (env) {

  return {
    mode: env,

    entry: srcPath('index.js'),

    // 默认是 ['.wasm', '.mjs', '.js', '.json']，
    // 没有jsx，要自己覆盖掉默认值
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '~': srcPath()
      }
    },

    plugins: [
      // new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Henson\'s Blog',
        template: srcPath('assets/template/index.html')
      })
    ],

    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: [srcPath()],
          loader: 'babel-loader'
        },

        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
            },
          ],
        },

        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },

        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        }
      ]
    }
  }
}

