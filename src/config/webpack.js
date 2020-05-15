/**
 * @name Webpack配置
 */

/* private */

const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineChunkPlugin = require('../util/html-inline-chunk-plugin')

let htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: Path.resolve(__dirname, '../web/index.html')
})

/* public */

let config = {
  mode: 'production',
  entry: Path.resolve(__dirname, '../web/index.js'),
  output: {
    path: Path.resolve(__dirname, '../../#output'),
    filename: 'index.js'
  },
  plugins: [
    htmlWebpackPlugin,
    new HtmlInlineChunkPlugin(htmlWebpackPlugin)
  ]
}

/* construct */

module.exports = config