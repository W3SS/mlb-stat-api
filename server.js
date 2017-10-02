const chalk = require('chalk')
const config = require('config')
const compress = require('koa-compress')
const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const { graphiqlKoa } = require('graphql-server-koa')
const { graphqlKoa } = require('apollo-server-koa')
const Schema = require('mlb-stat-schema')
const mlbGraph = require('./schema')

const app = new Koa()
const router = new Router()

const db = new Schema(process.env.DBCONNECTION || config.get('db.host'))
const port = process.env.PORT || config.get('port')

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

module.exports = {
  run
}
