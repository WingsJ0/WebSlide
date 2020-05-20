/**
 * @name 清理
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises

/* public */

/**
 * @name 清理
 * @return {Promise}
 */
const clean = async () => {
  return Fs.unlink(Path.resolve(__dirname, '../../../#output/index.js'))
}

/* construct */

module.exports = clean