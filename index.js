
module.exports = require('./load')(require('ssb-config'))

if(!module.parent && process.title !== 'browser')
  console.log(module.exports)
