/**
 * @name 准备
 */

/* private */

const Path = require('path')
const FS = require('fs')

/* public */

const prepare = () => {
  let inputDir = Path.resolve(process.cwd(), './#input')
  let tempDir = Path.resolve(__dirname, '../../../#temp')
  let outputDir = Path.resolve(process.cwd(), '../../../#output')

  try {
    FS.statSync(inputDir)
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
    FS.statSync(outputDir)
  } catch{
    FS.mkdirSync(outputDir)
  }
}

/* construct */

module.exports = prepare