/**
 * @name 监视
 */

/* private */

const Path = require('path')
const nodemon = require('nodemon')

/* public */

/**
 * @name 监视
 */
const watch = () => {
  nodemon({
    script: Path.resolve(__dirname, './build.js'),
    ext: 'js json html css'
  })
}

/* construct */

module.exports = watch