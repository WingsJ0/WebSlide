#!/usr/bin/env node

/**
 * @name Index
 */

/* private */

const build = require('./command/build')

/* construct */

let args = process.argv.slice(2)

console.log(args)

build()

