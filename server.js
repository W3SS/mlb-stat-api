const chalk = require('chalk')
const config = require('config')
const Hapi = require('hapi')
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi')
const Schema = require('mlb-stat-schema')
const subscriptionServer = require('mlb-stat-subscription')
const mlbGraph = require('./schema')

const db = new Schema(process.env.DBCONNECTION || config.get('db.host'))
const port = process.env.PORT || config.get('port')
const subscriptionPort = process.env.SUBSCRIPTION_PORT || config.get('subscriptionPort')
const subscriptionHost = process.env.SUBSCRIPTION_HOST || config.get('subscriptionHost')

let run = async () => {
  try {
    await db.connect()
  } catch (error) {
    console.log(chalk.red(error))
    console.log(chalk.red('Connection error in: ' + config.get('db.host')))
    process.exit()
  }

  const app = new Hapi.Server()
  app.connection({ port })

  app.register({
    register: graphqlHapi,
    options: {
      path: '/mlb',
      graphqlOptions: { schema: mlbGraph, context: { db } }
    }
  })

  app.register({
    register: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/mlb',
        subscriptionsEndpoint: `${subscriptionHost}:${subscriptionPort}/subscriptions`
      }
    }
  })

  await app.start().catch(error => {
    throw error
  })

  console.log(chalk.green(`Connection established in port: ${port}`))

  subscriptionServer(app, subscriptionHost, subscriptionPort, mlbGraph)
}

module.exports = {
  run
}
