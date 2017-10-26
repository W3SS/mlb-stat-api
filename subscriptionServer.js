const { execute, subscribe } = require('graphql')
const { createServer } = require('http')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const config = require('config')

const port = process.env.SUBSCRIPTION_PORT || config.get('subscriptionPort')
const host = process.env.SUBSCRIPTION_HOST || config.get('subscriptionHost')

const run = (server, schema) => {
  const ws = createServer(server)
  ws.listen(port, () => {
    console.log(`GraphQL Server is now running on ${host}:${port}`)
    SubscriptionServer.create(
      {
        execute,
        subscribe,
        schema
      },
      {
        server: ws,
        path: '/subscriptions'
      }
    )
  })
}

module.exports = {
  run
}
