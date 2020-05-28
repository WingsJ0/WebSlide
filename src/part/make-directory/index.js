/**
 * @name 制作目录
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises

const Template ='export default [ ${directory} ]'

/* public */

/**
 * @name 制作目录
 * @return {Promise}
 */
const makeDirectory = async () => {
  let input = Path.resolve(process.cwd(), './#input')

  let inputFiles = await Fs.readdir(input)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => `require('${Path.resolve(input, el).replace(/\\/g, '/')}')`)
  let text = Template.replace('${directory}', htmls.join(','))

  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/directory.js'), text)
}

/* construct */

module.exports = makeDirectory