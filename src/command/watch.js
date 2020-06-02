/**
 * @name 监视
 */

/* private */

const serve=require('../part/serve')
const Start = require('./start')

/* public */

/**
 * @name 监视
 */
const watch = async () => {
  await Start()
  serve()
}

/* construct */

module.exports = watch