/**
 * @name 制作样式
 */

/* private */

const FS = require('fs').promises
const Path = require('path')
const InputPath = require('../../util/cwd').inputPath

const Template = '@import "${style}"'

/* public */

/**
 * @name 制作样式
 */
const makeStyle = async () => {
  let r

  let path = Path.resolve(InputPath, './$config.css')
  try {
    await FS.stat(path)
    r = Template.replace('${style}', path.replace(/\\/g, '/'))
  } catch{
    r = ''
  }

  return FS.writeFile(Path.resolve(__dirname, '../../../#temp/config.css'), r)
}

/* construct */

module.exports = makeStyle