/**
 * @name Index
 */

/* private */

const MakeConfig = require('./part/make-config')
const MakeStyle=require('./part/make-style')
const MakeDirectory = require('./part/make-directory')
const Build = require('./part/build')
const Clean=require('./part/clean');

/* construct */

(async () => {
  try {
    await Promise.all([MakeConfig(),MakeStyle(),MakeDirectory()])
    await Build()
    await Clean()
  } catch (er) {
    console.log(er)
  }
})()

