# SSB Manifest

for constructing RPC sessions with scuttlebot and other ssb nodes

```js
var muxrpc     = require('muxrpc')
var Serializer = require('pull-serializer')
var manifest   = require('ssb-manifest') 

// create a RPC object using the ssb protocol
var ssb = muxrpc(manifest, false, function (stream) { return Serializer(stream, JSON, {split: '\n\n'}) })()
```