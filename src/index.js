const Webpack = require('webpack')
const WebpackConfig = require('./config/webpack.config.js')

Webpack(WebpackConfig, (er, stats) => {
  if (er || stats.hasErrors()) {
    console.log(er)
    console.log(stats)
  }
})