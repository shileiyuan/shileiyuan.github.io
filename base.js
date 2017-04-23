const webpack = require('webpack');
const path = require('path');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function (env) {
  return {
    entry: {
      index: [
        'babel-polyfill',
        './src/index'
      ]
    },
    resolve: {
      extensions: ['.js', 'json', '.jsx', '*']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/,
          // use: ExtractTextPlugin.extract({
          //   loader: 'css-loader'
          // }),
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: 'url-loader?limit=100000'
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new webpack.ProvidePlugin({
        'Promise': 'es6-promise'
      })
      // new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
    ]
  };
}