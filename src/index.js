/**
 * @name Index
 */

/* private */

const Fs = require('fs')
const Path = require('path')
const _ = require('lodash')
const Webpack = require('webpack')
const WebpackConfig = require('./config/webpack.js')
const RuntimeConfig = require('./config/runtime.js')

/**
 * @name 制作配置
 */
const makeConfig = () => {
  let customConfig = JSON.parse(Fs.readFileSync(Path.resolve(__dirname, '../#input/config.json')))
  let config = _.merge(RuntimeConfig, customConfig)
  Fs.writeFileSync(Path.resolve(__dirname, '../#temp/config.json'), JSON.stringify(config))
}
/**
 * @name 制作目录
 */
const makeDirectory = () => {
  let inputFiles = Fs.readdirSync(Path.resolve(__dirname, '../#input'))
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b)
  Fs.writeFileSync(Path.resolve(__dirname, '../#temp/directory.json'), JSON.stringify(htmls))
}
/**
 * @name 构建
 */
const build = () => {
  Webpack(WebpackConfig, (er, stats) => {
    if (er || stats.hasErrors()) {
      console.log(er)
      console.log(stats)
    } else {
      Fs.unlinkSync(Path.resolve(__dirname, '../#output/index.js'))
    }
  })
}

/* construct */

makeConfig()
makeDirectory()
build()