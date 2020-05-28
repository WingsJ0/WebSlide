/**
 * @name 制作样式
 */

/* private */

const Fs = require('fs').promises
const Path = require('path')

const Template = '@import "${style}"'

/* public */

/**
 * @name 制作样式
 */
const makeStyle = async () => {
  let r

  let path = Path.resolve(process.cwd(), './#input/$config.css')
  try {
    let stat = await Fs.stat(path)
    r = Template.replace('${style}', path.replace(/\\/g, '/'))
  } catch{
    r = ''
  }

  return Fs.writeFile(Path.resolve(__dirname, '../../../#temp/config.css'), r)
}

/* construct */

module.exports = makeStyle