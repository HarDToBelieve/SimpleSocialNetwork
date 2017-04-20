const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/Routes.js',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap', 'react-router-bootstrap',
      'isomorphic-fetch', 'babel-polyfill', 'react-select',
    ],
  },
  output: {
    path: './static',
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  }
};
