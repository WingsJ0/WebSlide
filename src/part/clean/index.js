/**
 * @name 清理
 */

/* private */

const Path = require('path')
const FS = require('fs').promises
const OutputPath = require('../../util/cwd').outputPath

/* public */

/**
 * @name 清理
 * @return {Promise}
 */
const clean = async () => {
  let tempDirPath = Path.resolve(__dirname, '../../../#temp')
  let tempFiles = await FS.readdir(tempDirPath)
  let tempPathes = tempFiles.map(el => Path.resolve(tempDirPath, el))

  let cleanPath = [Path.resolve(OutputPath, './index.js'), ...tempPathes]
  try{
    return Promise.all(cleanPath.map(el => FS.unlink(el)))
  } catch(er){
    console.log('[Error] ', er)
    return Promise.resolve()
  }
}

/* construct */

module.exports = clean