/**
 * @name Webpack配置
 */

/* private */

const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineChunkPlugin = require('../util/html-inline-chunk-plugin')
const OutputPath = require('../util/cwd').outputPath

let htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: Path.resolve(__dirname, '../web/index.html')
})

/* public */

let config = {
  mode: 'development',
  entry: Path.resolve(__dirname, '../web/index.js'),
  output: {
    path: Path.resolve(OutputPath),
    filename: 'index.js'
  },
  resolveLoader: {
    modules: [Path.resolve(__dirname, '../../node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024000000
          }
        }
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new HtmlInlineChunkPlugin(htmlWebpackPlugin)
  ]
}

/* construct */

module.exports = config