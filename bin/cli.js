#!/usr/bin/env node

/* istanbul ignore if */
if (process.version.match(/v(\d+)\./)[1] < 6) {
  console.error('chan-log: Node v6 or greater is required. `chan-log` did not run.')
} else {
  const changeLog = require('../index')
  const cmdParser = require('../command')
  changeLog(cmdParser.argv)
    .catch(() => {
      process.exit(1)
    })
}