module.exports = {
  // users
  auth: 'async',
  whoami: 'async',
  getPublicKey: 'async',

  // messages
  get: 'async',
  getLatest: 'async',
  add: 'async',

  // indexes
  createFeedStream: 'source',
  createHistoryStream: 'source',
  createLogStream: 'source',
  messagesByType: 'source',
  messagesLinkedToMessage: 'source',
  messagesLinkedToFeed: 'source',
  messagesLinkedFromFeed: 'source',
  feedsLinkedToFeed: 'source',
  feedsLinkedFromFeed: 'source',
  followedUsers: 'source',
  relatedMessages: 'async',

  // network
  getLocal: 'async',

  // plugins
  invite: {
    addMe: 'async'
  },
  gossip: {
    peers: 'sync',
    connect: 'async'
  },
  friends: {
    all: 'sync',
    hops: 'sync'
  },
  blobs: {
    get: 'source',
    has: 'async',
    add: 'sink',
    ls: 'source',
    want: 'async'
  }
}