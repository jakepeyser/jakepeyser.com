/* eslint-disable no-unused-vars*/

const webpack = require('webpack');
// const path = require('path');
// const PATHS = {
//   app: path.join(__dirname, 'app'),
//   build: path.join(__dirname, 'build')
// };

module.exports = {
  entry: './browser/react/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
