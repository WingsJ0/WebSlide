#!/usr/bin/env node

/**
 * @name Index
 */

/* private */

const MakeConfig = require('./part/make-config')
const MakeStyle = require('./part/make-style')
const MakeDirectory = require('./part/make-directory')
const Build = require('./part/build')
const Clean = require('./part/clean')
const OutputPath = require('./util/output-path');

/* construct */

(async () => {
  try {
    await Promise.all([MakeConfig(), MakeStyle(), MakeDirectory()])

    await Build()
    console.log('[Info] Build completed')
    await Clean()
    console.log(`[Info] Output in ${OutputPath}`)
  } catch (er) {
    console.log(er)
  }
})()

