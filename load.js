var path = require('path')
var readFileSync = require('fs').readFileSync

module.exports = function (config) {

  if(process.title === 'browser' && window.SSB_MANIFEST)
    return SSB_MANIFEST

  //if we are on the client
  if(readFileSync && config && config.path)
    var filename = path.join(config.path, 'manifest.json')
    try {
      return JSON.parse(
        readFileSync(filename, 'utf-8')
      )
    } catch (err) {
      console.error('could not parse:'+filename)
      console.error(err.stack)
    }

  return require('./defaults')
}
