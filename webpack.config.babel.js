import HtmlWebpackPlugin from 'html-webpack-plugin'
//const HtmlWebpackPlugin = require('html-webpack-plugin')

export default {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader', options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader', options: {
            sourceMap: true
          }
        }]
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      'template': 'client/index.html',
      'filename': 'index.html',
      'inject': 'body'
    })
  ]
}