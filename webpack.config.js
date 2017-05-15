const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 8080,
  },
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
    ],
  },
};

module.exports = config;
