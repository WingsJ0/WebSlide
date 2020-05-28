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
  let config
  let path = Path.resolve(__dirname, '../../../#input/$config.json')

  try {
    config = JSON.parse(await Fs.readFile(path))
  } catch{
    config = {}
  }

  let r = _.merge(RuntimeConfig, config)

  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/config.json'), JSON.stringify(config))
}

/* construct */

module.exports = makeConfig