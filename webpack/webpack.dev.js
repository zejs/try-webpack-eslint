const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8089,
    hot: true,
  },
  optimization: {
    moduleIds: 'natural',
    chunkIds: 'natural',
  },
  plugins: [

  ],
});
