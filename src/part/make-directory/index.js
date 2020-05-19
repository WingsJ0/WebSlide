/* private */

const Path = require('path')
const Fs = require('fs')

const Template =`export default [ \${directory} ]`

/* public */

/**
 * @name 制作目录
 */
const makeDirectory = () => {
  let data = Path.resolve(__dirname, '../../../#input')

  let inputFiles = Fs.readdirSync(data)
  let htmls = inputFiles.filter(el => /\.html$/.test(el)).sort((a, b) => a > b).map(el => `require('${Path.resolve(data, el).replace(/\\/g, '/')}')`)
  let text = Template.replace('${directory}', htmls.join(','))

  Fs.writeFileSync(Path.resolve(__dirname, '../../../#temp/directory.js'), text)
}

/* construct */

module.exports = makeDirectory