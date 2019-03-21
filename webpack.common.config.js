/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const parseArgs = require('minimist');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const argv = parseArgs(process.argv.slice(2));

// The base webpack config
const baseConfig = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: path.resolve(__dirname, '.eslintrc.json')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      Components: path.resolve(__dirname, './src/js/components'),
      Actions: path.resolve(__dirname, './src/js/actions'),
      Reducers: path.resolve(__dirname, './src/js/reducers'),
      Utils: path.resolve(__dirname, './src/js/utils'),
      Js: path.resolve(__dirname, './src/js'),
      Styles: path.resolve(__dirname, './src/css'),
    }
  }
};


if (argv.a) {
  config = merge(config, {
    plugins: [ new BundleAnalyzerPlugin() ]
  });
}

module.exports = baseConfig;
