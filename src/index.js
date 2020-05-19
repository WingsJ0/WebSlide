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
const MakeDirectory = require('./part/make-directory')

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
  let base = Path.resolve(__dirname, '../#input')

  let inputFiles = Fs.readdirSync(base)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => Path.resolve(base, el).replace(/\\/g, '/'))
  Fs.writeFileSync(Path.resolve(__dirname, '../#temp/directory.json'), JSON.stringify(htmls))
}
/**
 * @name 构建
 */
const build = () => {
  Webpack(WebpackConfig, (er, stats) => {
    if (er || stats.hasErrors()) {
      if (er) {
        console.log(er)
      }
      if (stats.hasErrors()) {
        let statsJson = stats.toJson()
        for (el of statsJson.errors) {
          console.log(el)
        }
        for (el of statsJson.warnings) {
          console.log(el)
        }
      }
    } else {
      Fs.unlinkSync(Path.resolve(__dirname, '../#output/index.js'))
    }
  })
}

/* construct */

makeConfig()
MakeDirectory()
build()