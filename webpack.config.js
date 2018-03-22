var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src/client/app.js')],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}