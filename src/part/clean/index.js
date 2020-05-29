/**
 * @name 清理
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises
const OutputPath=require('../../util/output-path')

/* public */

/**
 * @name 清理
 * @return {Promise}
 */
const clean = async () => {
  return Fs.unlink(Path.resolve(OutputPath, './index.js'))
}

/* construct */

module.exports = clean