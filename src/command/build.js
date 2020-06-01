/**
 * @name 构建
 */

/* private */

const prepare = require('../part/prepare')
const MakeConfig = require('../part/make-config')
const MakeStyle = require('../part/make-style')
const MakeDirectory = require('../part/make-directory')
const Build = require('../part/build')
const Clean = require('../part/clean')
const OutputPath = require('../util/cwd').outputPath;

/* public */

/**
 * @name 构建
 */
const build = async () => {
  try {
    prepare()
    await Promise.all([MakeConfig(), MakeStyle(), MakeDirectory()])
    await Build()
    console.log('[Info] Build completed')
    await Clean()
    console.log(`[Info] Output in ${OutputPath}`)
  } catch (er) {
    console.log(er)
  }
}

/* construct */

module.exports = build