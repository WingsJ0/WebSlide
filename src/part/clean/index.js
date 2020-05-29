/**
 * @name 清理
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises
const OutputPath = require('../../util/cwd').outputPath

/* public */

/**
 * @name 清理
 * @return {Promise}
 */
const clean = async () => {
  let tempDirPath = Path.resolve(__dirname, '../../../#temp')
  let tempFiles = await Fs.readdir(tempDirPath)
  let tempPathes = tempFiles.map(el => Path.resolve(tempDirPath, el))

  let cleanPath = [Path.resolve(OutputPath, './index.js'), ...tempPathes]

  return Promise.all(cleanPath.map(el => Fs.unlink(el)))
}

/* construct */

module.exports = clean