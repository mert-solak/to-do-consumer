const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const packageJson = require('../../package.json');
const appConfig = require('../app.config');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `${appConfig.development.url}:${appConfig.development.port}/`,
  },
  devServer: {
    port: appConfig.development.port,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: appConfig.name,
      remotes: appConfig.development.remotes,
      shared: packageJson.dependencies,
    }),
    new Dotenv({
      path: path.join(__dirname, '../../.dev.env'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
