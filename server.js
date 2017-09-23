import chalk from 'chalk'
import config from 'config'
import compress from 'koa-compress'
import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import { graphiqlKoa } from 'graphql-server-koa'
import { graphqlKoa } from 'apollo-server-koa'
import Schema from 'mlb-stat-schema'
import mlbGraph from './schema'

const app = new Koa()
const router = new Router()

const db = new Schema(config.get('db.host'))
const port = config.get('port')

let run = async () => {
  try {
    await db.connect()
  } catch (error) {
    console.log(chalk.red(error))
    console.log(chalk.red('Connection error in: ' + config.get('db.host')))
    process.exit()
  }

  app.use(BodyParser())

  router.post('/mlb', graphqlKoa({ schema: mlbGraph, context: { db } }))
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/mlb' }))

  app.use(router.routes()).use(router.allowedMethods())

  app.use(compress())

  app.listen(port)
}

export default {
  run
}
