const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.bs.js',

  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[sha512:hash:base64:4]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2|jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: '[sha256:hash:hex:5].[ext]',
        },
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],

  resolve: {
    extensions: ['.js', '.scss'],
  },
};

module.exports = config;
