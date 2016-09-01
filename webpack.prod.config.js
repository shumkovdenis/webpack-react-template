const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',

  entry: [
    path.join(__dirname, '/src/app/app.jsx'),
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'template',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
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
          'babel',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;
