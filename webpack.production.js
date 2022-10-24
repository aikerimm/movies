const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
  },
  plugins: [
    new Dotenv({
      systemvars: true,
      path: path.resolve(__dirname, '.env.production'),
    }),
  ],
});
