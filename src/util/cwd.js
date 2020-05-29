/**
 * @name 输出路径
 */

/* private */

const Path = require('path')

/* public */

const inputPath = Path.resolve(process.cwd(), './#input')
const outputPath = Path.resolve(process.cwd(), './#output')

/* construct */

module.exports = { inputPath, outputPath }