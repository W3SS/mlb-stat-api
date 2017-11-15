const Subscription = `
  type Subscription {
    gameUpdated(date: String!): Game
  }
`

module.exports = Subscription
