#!/usr/bin/env node

/**
 * @name Index
 */

/* private */

const build = require('./command/build')
const watch = require('./command/watch')

/* construct */

let args = process.argv.slice(2)
if (args.includes('--watch')) {
  watch()
} else {
  build()
}
