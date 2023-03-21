const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '../src/app.tsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'script/[name].[chunkhash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __TEST__: JSON.stringify('test'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html'),
    }),
  ],
};
