/**
 * @name 构建
 */

/* private */

const Webpack = require('webpack')
const WebpackConfig = require('../../config/webpack.js')

/* public */

/**
 * @name 构建
 * @return {Promise}
 */
const build = () => {
  let promise = new Promise((resolve, reject) => {
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
        reject()
      } else {
        resolve()
      }
    })
  })

  return promise
}

/* construct */

module.exports = build

