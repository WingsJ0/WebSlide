/**
 * @name 监视
 */

/* private */

const Path = require('path')
const nodemon = require('nodemon')

/* construct */

// let watchDir = Path.resolve(process.cwd(), './#input')

nodemon({
  script: Path.resolve(__dirname, './build.js'),
  ext:'js json html css'
})
