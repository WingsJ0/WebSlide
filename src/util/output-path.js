/**
 * @name 输出路径
 */

/* private */

const Path = require('path')

/* public */

const outputPath = Path.resolve(process.cwd(), './#output')

/* construct */

module.exports = outputPath