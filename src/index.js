/**
 * @name Index
 */

/* private */

const MakeDirectory = require('./part/make-directory')
const MakeConfig = require('./part/make-config')
const Build = require('./part/build')
const Clean=require('./part/clean');

/* construct */

(async () => {
  try {
    await MakeConfig()
    await MakeDirectory()
    await Build()
    await Clean()
  } catch (er) {
    console.log(er)
  }
})()

