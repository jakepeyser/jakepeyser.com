const webpack = require('webpack');

exports.devServer = function(options) {
  return {
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
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}

// Code minification -> PROD only!!!
exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}

// Chunks up the bundles -> PROD only!!!
exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;
  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
}
