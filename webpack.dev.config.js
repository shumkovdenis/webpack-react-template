const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.jsx'),
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'template',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loaders: [
          'react-hot',
          'babel',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
  },
};

module.exports = config;
