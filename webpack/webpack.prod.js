const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxAsyncRequests: 3,
      maxInitialRequests: 5,
      cacheGroups: {
        defaultVendors: {
          name: 'default-vendors',
          test: /[\\/]node_modules[\\/](react|react-dom|mobx|mobx-react|react-router-dom|react-router)[\\/]/,
          priority: 100,
        },
        default: {
          minChunks: 2,
          priority: -20,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
