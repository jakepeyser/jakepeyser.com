/* eslint-disable no-unused-vars*/

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const tools = require('./libs/webpack.tools');

// Init common paths used by config
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'browser/react'),
  build: path.join(__dirname, 'browser/build'),
  favicon: path.join(__dirname, 'browser/src/favicon.ico'),
  stylesheets: path.join(__dirname, 'browser/src/stylesheets'),
  images: path.join(__dirname, 'browser/src/images'),
  html_template: path.join(__dirname, 'browser/src/index.html')
};

// index.html template
let htmlTemplate = {
  title: 'Jake Peyser',
  meta: {
    description: 'The personal website of Jake Peyser, software engineer and international adventurer extraordinaire',
    author: 'Jake Peyser',
    keywords: 'software,developer,web,freelance,nodejs,react'
  },
  template: PATHS.html_template
}

// Standard build artifacts for all envs
const common = {
  entry: { app: PATHS.app },
  output: {
    path: PATHS.build,
    sourceMapFilename: '[file].map',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
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
}

// Detect how npm is run and switch based on this
let config;
switch (process.env.npm_lifecycle_event) {
  case 'start':
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: Object.assign(common.output, {
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }),
        plugins: [
          ...common.plugins,
          new FaviconsWebpackPlugin({
            logo: `${PATHS.images}/logo.png`,
            emitStats: false
          }),
          new HtmlWebpackPlugin(htmlTemplate)
        ]
      },
      tools.clean(PATHS.build),
      tools.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      tools.setupStatic([ PATHS.stylesheets, PATHS.images ]),
      tools.minify()
    );
    break;
  case 'dev':
    htmlTemplate.favicon = PATHS.favicon;
    config = merge(
      common,
      {
        devtool: 'eval',
        plugins: [
          ...common.plugins,
          new HtmlWebpackPlugin(htmlTemplate)
        ]
      },
      tools.clean(PATHS.build),
      tools.setupStatic([ PATHS.stylesheets, PATHS.images ])
      // tools.devServer({
      //   port: 3000
      // })
    );
    break;
  default:
    console.log('No Webpack config specified')
    config = merge(common)
}

module.exports = validate(config);
