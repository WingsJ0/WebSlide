/**
 * @name 准备
 */

/* private */

const Path = require('path')
const FS = require('fs')
const CWD = require('../../util/cwd')

/* public */

const prepare = () => {
  let tempDir = Path.resolve(__dirname, '../../../#temp')

  try {
    FS.statSync(CWD.inputPath)
  } catch{
    console.log('[Error] #input directory not exists')
    process.exit(1)
  }

  try {
    FS.statSync(tempDir)
  } catch{
    FS.mkdirSync(tempDir)
  }
  try {
    FS.statSync(CWD.outputPath)
  } catch{
    FS.mkdirSync(CWD.outputPath)
  }
}

/* construct */

module.exports = prepare