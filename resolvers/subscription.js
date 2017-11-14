const pubsub = require('./pubsub')

const SubscriptionResolver = {
  Subscription: {
    gameUpdated: {
      subscribe: () => pubsub.asyncIterator('gameUpdated')
    }
  }
}

module.exports = SubscriptionResolver
