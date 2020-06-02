/**
 * @name 制作配置
 */

/* private */

const FS = require('fs').promises
const Path = require('path')
const _ = require('lodash')
const RuntimeConfig = require('../../config/runtime')
const InputPath=require('../../util/cwd').inputPath

/* public */

/**
 * @name 制作配置
 * @return {Promise}
 */
const makeConfig = async () => {
  let config
  let path = Path.resolve(InputPath, './$config.json')

  try {
    config = JSON.parse(await FS.readFile(path))
  } catch{
    config = {}
  }

  let r = _.merge(RuntimeConfig, config)

  return FS.writeFile(Path.resolve(__dirname, '../../../#temp/config.json'), JSON.stringify(r))
}

/* construct */

module.exports = makeConfig