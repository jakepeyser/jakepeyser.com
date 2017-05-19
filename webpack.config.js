/* eslint-disable no-unused-vars, no-fallthrough*/
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

// Projects in my portfolio
const projects = [
  'capital-weather',
  'parachute-teachers',
  'real-time-tone-analysis',
  'runkeeper-hashmatch',
  'steps'
];

// Init common paths used by config
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'browser/react'),
  build: path.join(__dirname, 'browser/build'),
  favicon: path.join(__dirname, 'browser/src/favicon.ico'),
  stylesheets: path.join(__dirname, 'browser/src/stylesheets', 'style.scss'),
  logo: path.join(__dirname, 'browser/src/images/logo.png'),
  html_template: path.join(__dirname, 'browser/src/index.html')
};

// Vendor dependencies, isolated for chunking
const vendorDependencies = [
  'axios', 'material-ui', 'gsap',
  'react', 'react-dom', 'react-helmet', 'react-router',
  'redux', 'react-redux', 'redux-logger', 'redux-thunk'
]

// index.html template
let htmlTemplate = {
  title: 'Jake Peyser',
  meta: {
    description: 'The personal website of Jake Peyser, full stack developer and international adventurer extraordinaire',
    author: 'Jake Peyser',
    keywords: 'software,developer,web,freelance,nodejs,react',
    viewport: 'width=device-width, initial-scale=1.0'
  },
  template: PATHS.html_template
}

// Desginate sitemap paths
const sitePaths = [
  '/home',
  '/portfolio',
  '/resume',
  '/contact'
];
projects.forEach(project => {
  sitePaths.push(`/portfolio/${project}`);
})

// Standard build artifacts for all envs
const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.stylesheets
  },
  output: {
    path: PATHS.build,
    sourceMapFilename: '[file].map',
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    alias: {
      'TweenLite': 'gsap/src/uncompressed/TweenLite.js',
      'CSSPlugin': 'gsap/src/uncompressed/plugins/CSSPlugin.js'
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new CleanWebpackPlugin( // remove old build before each bundling
      [ PATHS.build ],
      { root: process.cwd() }
    )
  ],
  module: {
    loaders: [
      { // Convert React code into vanilla ES5
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { // Transpile SASS and load CSS
        test: /\.scss$/,
        loader: process.env.NODE_ENV !== 'production' ?
          'style!css!sass' : ExtractTextPlugin.extract('style', 'css!sass'),
        include: PATHS.stylesheets
      },
      { // Load required JSON files
        test: /\.json$/,
        loader: 'json'
      },
      { // Inline SVGs where required in components
        test: /\.svg$/,
        loader: 'babel!svg-react'
      }
    ]
  }
}

// Detect how npm is run and switch based on this
let config, devServer;
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        entry: { vendor: vendorDependencies },
        devtool: 'source-map',
        output: Object.assign(common.output, {
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }),
        plugins: [
          ...common.plugins,
          new FaviconsWebpackPlugin({
            logo: PATHS.logo,
            emitStats: false
          }),
          new HtmlWebpackPlugin(htmlTemplate),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          }),
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
          }),
          new SitemapPlugin('http://jakepeyser.com', sitePaths),
          new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
          })
        ]
      }
    );
    break;
  case 'hmr': // Establish a HMR dev server
    devServer = {
      devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            secure: false
          }
        },
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        port: 3000
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin({
          multiStep: true
        })
      ]
    }
  case 'stats': // Used to generate build stats
  case 'build-watch':
    htmlTemplate.favicon = PATHS.favicon;
    config = merge(
      common,
      devServer,
      {
        devtool: 'eval-source-map',
        plugins: [
          ...common.plugins,
          new HtmlWebpackPlugin(htmlTemplate),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
          })
        ]
      }
    );
    break;
  default:
    console.log('No Webpack config specified')
    config = merge(common)
}

module.exports = validate(config, { quiet: true });

