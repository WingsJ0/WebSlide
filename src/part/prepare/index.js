/**
 * @name 准备
 */

/* private */

const Path = require('path')
const Fs = require('fs')

/* public */

const prepare = () => {
  let inputDir = Path.resolve(process.cwd(), './#input')
  let tempDir = Path.resolve(__dirname, '../../../#temp')
  let outputDir = Path.resolve(process.cwd(), '../../../#output')

  try {
    Fs.statSync(inputDir)
  } catch{
    console.log('[Error] #input directory not exists')
    process.exit(1)
  }

  try {
    Fs.statSync(tempDir)
  } catch{
    Fs.mkdirSync(tempDir)
  }
  try {
    Fs.statSync(outputDir)
  } catch{
    Fs.mkdirSync(outputDir)
  }
}

/* construct */

module.exports = prepare