const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const packageJson = require('../../package.json');
const appConfig = require('../app.config');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: appConfig.name,
      remotes: appConfig.production.remotes,
      shared: packageJson.dependencies,
    }),
    new Dotenv({
      path: path.join(__dirname, '../../.env'),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
