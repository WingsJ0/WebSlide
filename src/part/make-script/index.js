/**
 * @name 制作脚本
 */

/* private */

const FS = require('fs').promises
const Path = require('path')
const InputPath = require('../../util/cwd').inputPath

const Template = 'import "${script}"'

/* public */

/**
 * @name 制作样式
 */
const makeScript = async () => {
  let r

  let path = Path.resolve(InputPath, './$config.js')
  try {
    await FS.stat(path)
    r = Template.replace('${script}', path.replace(/\\/g, '/'))
  } catch{
    r = ''
  }

  return FS.writeFile(Path.resolve(__dirname, '../../../#temp/config.js'), r)
}

/* construct */

module.exports = makeScript