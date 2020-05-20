/**
 * @name 制作配置
 */

/* private */

const Fs = require('fs').promises
const Path = require('path')
const _ = require('lodash')
const RuntimeConfig = require('../../config/runtime')

/* public */

/**
 * @name 制作配置
 * @return {Promise}
 */
const makeConfig = async () => {
  let customConfig = JSON.parse(await Fs.readFile(Path.resolve(__dirname, '../../../#input/config.json')))
  let config = _.merge(RuntimeConfig, customConfig)
  
  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/config.json'), JSON.stringify(config))
}

/* construct */

module.exports = makeConfig