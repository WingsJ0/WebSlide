/**
 * @name 制作目录
 */

/* private */

const Path = require('path')
const FS = require('fs').promises
const InputPath=require('../../util/cwd').inputPath

const Template ='export default [ ${directory} ]'

/* public */

/**
 * @name 制作目录
 * @return {Promise}
 */
const makeDirectory = async () => {
  let inputFiles = await FS.readdir(InputPath)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => `require('${Path.resolve(InputPath, el).replace(/\\/g, '/')}')`)
  let text = Template.replace('${directory}', htmls.join(','))

  return FS.writeFile(Path.resolve(__dirname, '../../../#temp/directory.js'), text)
}

/* construct */

module.exports = makeDirectory