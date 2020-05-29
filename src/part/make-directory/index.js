/**
 * @name 制作目录
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises
const InputPath=require('../../util/cwd').inputPath

const Template ='export default [ ${directory} ]'

/* public */

/**
 * @name 制作目录
 * @return {Promise}
 */
const makeDirectory = async () => {
  let inputFiles = await Fs.readdir(InputPath)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => `require('${Path.resolve(InputPath, el).replace(/\\/g, '/')}')`)
  let text = Template.replace('${directory}', htmls.join(','))

  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/directory.js'), text)
}

/* construct */

module.exports = makeDirectory