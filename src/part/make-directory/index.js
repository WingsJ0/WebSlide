/**
 * @name 制作目录
 */

/* private */

const Path = require('path')
const Fs = require('fs').promises

const Template =`export default [ \${directory} ]`

/* public */

/**
 * @name 制作目录
 * @return {Promise}
 */
const makeDirectory = async () => {
  let data = Path.resolve(__dirname, '../../../#input')

  let inputFiles = await Fs.readdir(data)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => `require('${Path.resolve(data, el).replace(/\\/g, '/')}')`)
  let text = Template.replace('${directory}', htmls.join(','))

  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/directory.js'), text)
}

/* construct */

module.exports = makeDirectory